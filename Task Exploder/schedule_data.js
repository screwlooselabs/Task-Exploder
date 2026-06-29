// Schedule Data Management & Persistence Module
const SCHEDULE_STORAGE_KEY = 'task_exploder_schedules';

function loadScheduleData() {
    try {
        const stored = localStorage.getItem(SCHEDULE_STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            if (parsed && typeof parsed === 'object' && parsed.schedules) {
                return parsed;
            }
        }
    } catch (e) {
        console.error("Local Storage reading error for schedules", e);
    }
    return { version: 1, schedules: {} };
}

function saveScheduleData(data) {
    try {
        localStorage.setItem(SCHEDULE_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.error("Local Storage writing error for schedules", e);
    }
}

// Retrieve schedule metadata for a specific task key
function getTaskSchedule(taskId) {
    const data = loadScheduleData();
    return data.schedules[taskId] || {
        recurrenceType: "none",
        recurrenceInterval: null,
        lastCompletedDate: null,
        nextDueDate: null
    };
}

// Save schedule metadata back to storage
function setTaskSchedule(taskId, scheduleObject) {
    const data = loadScheduleData();
    data.schedules[taskId] = {
        recurrenceType: scheduleObject.recurrenceType || "none",
        recurrenceInterval: scheduleObject.recurrenceInterval ? parseInt(scheduleObject.recurrenceInterval, 10) : null,
        lastCompletedDate: scheduleObject.lastCompletedDate || null,
        nextDueDate: scheduleObject.nextDueDate || null
    };
    saveScheduleData(data);
}

// Remove schedule configuration safely
function deleteTaskSchedule(taskId) {
    const data = loadScheduleData();
    if (data.schedules[taskId]) {
        delete data.schedules[taskId];
        saveScheduleData(data);
    }
}

// Wipe all structured schedules cleanly
function resetAllSchedules() {
    saveScheduleData({ version: 1, schedules: {} });
}

// Clean up references to obsolete task keys no longer in TASK_DATA
function cleanupOrphanedSchedules(validTaskIds) {
    const data = loadScheduleData();
    let isDirty = false;
    const validSet = new Set(validTaskIds);

    for (const taskId in data.schedules) {
        if (!validSet.has(taskId)) {
            delete data.schedules[taskId];
            isDirty = true;
        }
    }

    if (isDirty) {
        saveScheduleData(data);
    }
}