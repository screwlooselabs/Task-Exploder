// Pure Schedule Evaluation Engine
function calculateNextDueDate(schedule, referenceDateString) {
    if (!referenceDateString) return null;
    
    const parts = referenceDateString.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    
    let date = new Date(year, month, day);
    
    switch (schedule.recurrenceType) {
        case "daily":
            date.setDate(date.getDate() + 1);
            break;
        case "everyXDays":
            const interval = parseInt(schedule.recurrenceInterval, 10) || 1;
            date.setDate(date.getDate() + interval);
            break;
        case "weekly":
            date.setDate(date.getDate() + 7);
            break;
        case "monthly":
            date.setMonth(date.getMonth() + 1);
            break;
        case "none":
        default:
            return null;
    }
    
    // Safely format Date back to YYYY-MM-DD
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

// Check if a task schedule is due today or earlier
function isTaskDue(schedule, todayDateString) {
    if (!schedule || schedule.recurrenceType === "none" || !schedule.nextDueDate) {
        return false;
    }
    return schedule.nextDueDate <= todayDateString;
}

// Gather all tasks currently due based on schedule definitions
function getDueTasks(allTasks, allSchedules, todayDateString) {
    const dueList = [];
    if (!allTasks || !allTasks.categories) return dueList;
    
    allTasks.categories.forEach(cat => {
        cat.branches.forEach(branch => {
            branch.twigs.forEach(twig => {
                const taskId = `${cat.category_code}:${branch.branch_id}:${twig.id}`;
                const schedule = allSchedules[taskId];
                if (schedule && isTaskDue(schedule, todayDateString)) {
                    dueList.push({
                        taskId,
                        categoryCode: cat.category_code,
                        categoryName: cat.category_name,
                        branchId: branch.branch_id,
                        branchName: branch.branch_name,
                        twig,
                        schedule
                    });
                }
            });
        });
    });
    return dueList;
}

// Update the target schedule record with a fresh date stamp
function updateCompletion(taskId, schedule, todayDateString) {
    const updated = { ...schedule };
    updated.lastCompletedDate = todayDateString;
    updated.nextDueDate = calculateNextDueDate(updated, todayDateString);
    return updated;
}