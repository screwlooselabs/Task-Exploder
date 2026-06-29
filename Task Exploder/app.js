/*
 * ============================================
 * Task Exploder v1.0
 * © 2026 Screwloose Labs. All rights reserved.
 * ============================================
 * Licensed for personal use only.
 * Redistribution, resale, or republishing of
 * this software or its contents is strictly
 * prohibited without written permission.
 * ============================================
 * Built with care for anyone who struggles to start.
 * ============================================
 * Support: screwlooselabs@gmail.com
 * Web: screwlooselabs.neocities.org
 * ============================================
 */

// Global Translation Dictionary
const TRANSLATIONS = {
    app_version: { en: "Task Exploder v1.0", fr: "Task Exploder v1.0" },
    nav_start: { en: "Start", fr: "Démarrer" },
    nav_my_day: { en: "My Day", fr: "Ma Journée" },
    nav_stats: { en: "Stats", fr: "Stats" },
    
    // Language Select UI
    lang_select_title_en: { en: "Choose your language", fr: "Choose your language" },
    lang_select_title_fr: { en: "Choisissez votre langue", fr: "Choisissez votre langue" },
    lang_select_desc_en: { en: "This can be changed later in Settings", fr: "This can be changed later in Settings" },
    lang_select_desc_fr: { en: "Cela peut être modifié dans les Paramètres", fr: "Cela peut être modifié dans les Paramètres" },

    // Energy Selection
    energy_title: { en: "How is your operational battery right now?", fr: "Quel est votre niveau de batterie opérationnelle ?" },
    energy_subtitle: { en: "We modify your task depth to match your actual mental energy bandwidth.", fr: "Nous adaptons la profondeur des tâches à votre charge mentale réelle." },
    energy_low_title: { en: "Low Energy Mode", fr: "Mode Énergie Basse" },
    energy_low_desc: { en: "3 friction-free micro wins", fr: "3 micro-victoires sans friction" },
    energy_normal_title: { en: "Steady Mode", fr: "Mode Régulier" },
    energy_normal_desc: { en: "6 steps covering the baseline surface layer", fr: "6 étapes couvrant les bases essentielles" },
    energy_high_title: { en: "High Motivation Mode", fr: "Mode Motivation Haute" },
    energy_high_desc: { en: "Full 9-step deep clean track", fr: "Parcours complet de 9 étapes" },
    battery_config_prefix: { en: "Battery Configuration: ", fr: "Configuration batterie : " },
    change_battery_level: { en: "← Change Battery Level", fr: "← Changer le niveau de batterie" },

    // Category Selection
    select_target_zone: { en: "Select a Target Zone", fr: "Sélectionnez une zone cible" },
    surprise_me_all: { en: "🎲 Surprise Me (Random Mix)", fr: "🎲 Surprenez-moi (Mélange aléatoire)" },
    focus_title_suffix: { en: " Focus", fr: " en cours" },
    workspace_friction_title: { en: "What workspace is giving you friction?", fr: "Quel espace vous pose problème ?" },
    surprise_me_cat_prefix: { en: "🎲 Surprise Me (Random ", fr: "🎲 Surprenez-moi (Mélange " },
    surprise_me_cat_suffix: { en: " Mix)", fr: ")" },
    change_room: { en: "← Change Room", fr: "← Changer de zone" },

    // Active Twigs
    step_indicator: { en: "Step ", fr: "Étape " },
    step_separator: { en: " of ", fr: " sur " },
    random_mix_label: { en: "🎲 Random Mix", fr: "🎲 Mélange aléatoire" },
    random_category_prefix: { en: "🎲 Random ", fr: "🎲 Aléatoire " },
    done_btn: { en: "✓ DONE", fr: "✓ FAIT" },
    cant_do_this_btn: { en: "Can't do this right now?", fr: "Impossible pour l'instant ?" },
    reroll_btn: { en: "🎲 Reroll (Replace)", fr: "🎲 Relancer (Remplacer)" },
    snooze_btn: { en: "💤 Snooze (Skip)", fr: "💤 Reporter (Passer)" },
    nevermind_back: { en: "Nevermind, go back", fr: "Retourner en arrière" },
    no_replacement_found: { en: "No replacement tasks found for this energy level within this target zone.", fr: "Aucune tâche de remplacement trouvée pour ce niveau d'énergie dans cette zone." },
    no_replacement_found_snooze: { en: "No replacement tasks found for this energy level in this target zone to keep your session filled.", fr: "Aucune tâche de remplacement pour maintenir la session remplie." },
    tweak_on_the_fly: { en: "Tweak on-the-fly:", fr: "Ajuster à la volée :" },
    cancel_btn: { en: "Cancel", fr: "Annuler" },
    reset_btn: { en: "Reset", fr: "Réinitialiser" },
    save_btn: { en: "Save", fr: "Enregistrer" },

    // Milestone & Completion
    milestone_met_prefix: { en: "", fr: "Défi " },
    milestone_met_suffix: { en: " Milestone Met", fr: " Atteint" },
    inertia_broken_title: { en: "Inertia officially broken! 🎉", fr: "Inertie officiellement brisée ! 🎉" },
    inertia_broken_desc: { en: "You've cleared out exactly {count} micro-steps. You can safely step away right now with zero guilt, or check your battery to see if you want to push a bit deeper.", fr: "Vous avez accompli exactement {count} micro-étapes. Vous pouvez vous arrêter sans aucune culpabilité, ou continuer selon votre batterie." },
    keep_going_btn: { en: "Keep Going (+3 Steps)", fr: "Continuer (+3 Étapes)" },
    stop_claim_victory: { en: "Stop & Claim Victory", fr: "S'arrêter & fêter la victoire" },
    session_horizon_restored: { en: "Session Horizon Restored", fr: "Session Terminée" },
    smart_move_title: { en: "Smart Move!", fr: "Décision Intelligente !" },
    area_restored_title: { en: "Area Fully Restored! 🏆", fr: "Zone Entièrement Restaurée ! 🏆" },
    visual_closure_title: { en: "Visual Closure Summary", fr: "Résumé de Clôture Visuel" },
    return_to_zones: { en: "Return to Zones", fr: "Retourner aux Zones" },
    go_to_stats: { en: "Go to Stats 📊", fr: "Aller aux Statistiques 📊" },

    // My Day / Planner
    planner_meta: { en: "Daily Organizer", fr: "Organisateur Quotidien" },
    planner_heading: { en: "Command Dashboard", fr: "Tableau de Bord" },
    planner_routines_due: { en: "Routines Due", fr: "Routines Dues" },
    planner_scratchpad: { en: "Daily Scratchpad", fr: "Scratchpad Quotidien" },
    planner_routines_empty: { en: "No scheduled routines due today. Good job staying on top of it!", fr: "Aucune routine programmée aujourd'hui. Bon travail !" },
    planner_scratchpad_empty: { en: "Daily scratchpad is clear. Add temporary tasks above!", fr: "Le scratchpad quotidien est vide. Ajoutez des tâches temporaires ci-dessus !" },
    planner_scratchpad_placeholder: { en: "Quick unstructured todo...", fr: "Tâche rapide non structurée..." },
    planner_scratchpad_add_btn: { en: "Add", fr: "Ajouter" },
    planner_scratchpad_full: { en: "Scratchpad full (limit 50 items). Clear some items first!", fr: "Scratchpad plein (limite de 50 éléments). Supprimez d'abord des éléments !" },
    planner_sandbox_btn: { en: "⚙️ Task & Schedule Sandbox", fr: "⚙️ Bac à Sable Tâches & Planification" },

    // Stats
    stats_meta: { en: "Overview", fr: "Vue d'ensemble" },
    stats_heading: { en: "Your Progress", fr: "Votre Progression" },
    stats_points_label: { en: "Points", fr: "Points" },
    stats_sessions_label: { en: "Sess", fr: "Sess." },
    stats_wins_label: { en: "Wins", fr: "Victoires" },
    stats_streak_label: { en: "Streak", fr: "Série" },
    stats_days_label: { en: "Days", fr: "Jours" },
    stats_room_aura_label: { en: "Room Aura", fr: "Aura des Pièces" },
    stats_room_aura_desc: { en: "Percent of unique tasks you've completed in each area — tackle more tasks to raise it.", fr: "Pourcentage de tâches uniques accomplies dans chaque zone — variez vos tâches pour l'augmenter." },
    stats_unlocked_badges_label: { en: "Unlocked Badges", fr: "Badges Débloqués" },
    stats_wins_ledger_label: { en: "Win Ledger (Last 50)", fr: "Historique des Victoires (50 dernières)" },
    stats_ledger_empty: { en: "Wins Ledger is empty. Complete tasks to record activity.", fr: "L'historique des victoires est vide. Accomplissez des tâches pour enregistrer votre activité." },

    // Settings
    settings_meta: { en: "⚙️ Control Console", fr: "⚙️ Console de Contrôle" },
    settings_heading: { en: "System Settings", fr: "Paramètres Système" },
    settings_theme_mode: { en: "Visual Theme Mode", fr: "Mode de Thème Visuel" },
    settings_theme_night: { en: "🌙 Night Mode", fr: "🌙 Mode Sombre" },
    settings_theme_day: { en: "☀️ Day Mode", fr: "☀️ Mode Clair" },
    settings_language_label: { en: "Language", fr: "Langue" },
    settings_help_label: { en: "Help", fr: "Aide" },
    settings_help_replay: { en: "Replay Introduction", fr: "Rejouer l'Introduction" },
    settings_backup_label: { en: "Backup & Recovery", fr: "Sauvegarde & Récupération" },
    settings_backup_export: { en: "Export Backup", fr: "Exporter la Sauvegarde" },
    settings_backup_import: { en: "Import Backup", fr: "Importer la Sauvegarde" },
    settings_backup_desc: { en: "Your data stays on your device. Use Export to back it up before clearing your browser.", fr: "Vos données restent sur votre appareil. Utilisez l'exportation avant de vider votre navigateur." },
    settings_destructive_label: { en: "⚠️ Destructive Operations", fr: "⚠️ Opérations Destructrices" },
    settings_destructive_desc: { en: "Perform secure databank wipes. Confirmations will verify choices.", fr: "Effectuez des suppressions sécurisées. Des confirmations valideront vos choix." },
    settings_reset_stats_btn: { en: "Reset Performance Stats Only", fr: "Réinitialiser Uniquement les Statistiques" },
    settings_reset_all_btn: { en: "Full Factory Reset (Wipe Everything)", fr: "Réinitialisation d'Usine Complète (Tout Effacer)" },
    settings_close_btn: { en: "💾 Close Control Console", fr: "💾 Fermer la Console de Contrôle" },
    settings_import_error: { en: "Failed to parse backup file. Make sure it is a valid JSON file.", fr: "Échec de l'analyse du fichier de sauvegarde. Assurez-vous qu'il s'agit d'un fichier JSON valide." },

    // Sandbox / Customizer
    customizer_meta: { en: "Task & Recurrence Sandbox", fr: "Bac à sable Tâches & Récurrences" },
    customizer_heading: { en: "Personalize Tasks & Schedules", fr: "Personnaliser Tâches & Planification" },
    customizer_how_to_use_title: { en: "How to use this workspace:", fr: "Comment utiliser cet espace :" },
    customizer_how_to_use_1: { en: "Select a <strong>room tab</strong> below (e.g., Kitchen).", fr: "Sélectionnez un <strong>onglet de pièce</strong> ci-dessous (ex. Cuisine)." },
    customizer_how_to_use_2: { en: "Click a <strong>heading block</strong> below to expand its specific tasks.", fr: "Cliquez sur un <strong>bloc d'en-tête</strong> ci-dessous pour afficher ses tâches." },
    customizer_how_to_use_3: { en: "<strong>To Customize tasks:</strong> Edit the text fields directly to match your home (saves automatically).", fr: "<strong>Pour personnaliser :</strong> Modifiez directement les textes pour les adapter à votre foyer (sauvegarde automatique)." },
    customizer_how_to_use_4: { en: "<strong>To Schedule:</strong> Use the <strong>Recurrence dropdown</strong> under any task to set your tracking intervals.", fr: "<strong>Pour planifier :</strong> Utilisez le menu déroulant <strong>Récurrence</strong> sous n'importe quelle tâche pour définir vos intervalles." },
    customizer_cat_override_label: { en: "Custom Category Name Override", fr: "Nom personnalisé de la catégorie" },
    customizer_section_override_label: { en: "Custom Section Name Override", fr: "Nom personnalisé de la section" },
    customizer_task_label_prefix: { en: "Task Item #", fr: "Tâche #" },
    customizer_task_label_suffix: { en: " energy asset", fr: " d'énergie" },
    customizer_modified_tag: { en: "Custom Overwrite Active", fr: "Modification active" },
    customizer_default_tag: { en: "Standard Factory Default", fr: "Valeur d'usine standard" },
    customizer_restore_default: { en: "Restore Default", fr: "Restaurer" },
    customizer_recurrence_label: { en: "Recurrence:", fr: "Récurrence :" },
    customizer_last_completed: { en: "Last completed: ", fr: "Dernièrement accomplie : " },
    customizer_next_due: { en: " | Next due: ", fr: " | Échéance : " },
    customizer_never: { en: "Never", fr: "Jamais" },
    customizer_save_close_editor: { en: "💾 Save & Close Editor", fr: "💾 Enregistrer & Fermer l'Éditeur" },
    customizer_wipe_all: { en: "Wipe All System Customizations", fr: "Effacer les Personnalisations Système" },

    // Recurrence Select Options
    rec_none: { en: "None", fr: "Aucune" },
    rec_daily: { en: "Daily", fr: "Quotidien" },
    rec_every_x_days: { en: "Every X Days", fr: "Tous les X Jours" },
    rec_weekly: { en: "Weekly", fr: "Hebdomadaire" },
    rec_monthly: { en: "Monthly", fr: "Mensuel" },

    // Categories names (Fallback inside JS runtime)
    cat_kitchen: { en: "Kitchen", fr: "Cuisine" },
    cat_bathroom: { en: "Bathroom", fr: "Salle de Bain" },
    cat_living_room: { en: "Living Room", fr: "Salon" },
    cat_bedroom: { en: "Bedroom", fr: "Chambre" },
    cat_laundry: { en: "Laundry", fr: "Buanderie" },
    cat_digital_life: { en: "Digital Life", fr: "Vie Numérique" },
    cat_life_admin: { en: "Life Admin", fr: "Admin & Vie" },
    cat_work_productivity: { en: "Work / Productivity", fr: "Travail & Productivité" },
    cat_morning_routine: { en: "Morning Routine", fr: "Routine Matinale" },
    cat_evening_routine: { en: "Evening Routine", fr: "Routine du Soir" },

    // Alerts / Confirmations
    confirm_clear_all: { en: "Are you sure you want to clear overrides and scheduling data?", fr: "Êtes-vous sûr de vouloir effacer les personnalisations et les planifications ?" },
    confirm_reset_stats: { en: "Are you sure you want to reset your statistics? \n\nThis will permanently wipe all points, streak records, completed task progress, badge milestones, and history items to zero. \n\nYour customized task texts and recurring intervals will remain preserved. Proceed?", fr: "Êtes-vous sûr de vouloir réinitialiser vos statistiques ? \n\nCela effacera définitivement tous vos points, séries, progressions, badges et l'historique des victoires. \n\nVos textes personnalisés et planifications seront conservés. Continuer ?" },
    confirm_factory_reset: { en: "⚠️ WARNING: Complete System Wipe!\n\nThis will permanently delete ALL customized task names, ALL recurrence intervals, and ALL performance, streak, and badge progress records.\n\nThe application will revert completely to factory default settings.\n\nThis cannot be undone. Proceed?", fr: "⚠️ ATTENTION : Effacement Complet du Système !\n\nCela supprimera définitivement TOUS les noms de tâches personnalisés, TOUTES les planifications et TOUS les enregistrements de statistiques et de badges.\n\nL'application sera entièrement restaurée aux valeurs d'usine.\n\nCette action est irréversible. Continuer ?" },
    onboarding_begin_btn: { en: "Let's Begin", fr: "Commençons" },
    onboarding_back_btn: { en: "Back", fr: "Retour" },
    onboarding_next_btn: { en: "Next", fr: "Suivant" },

    // Focus Noise Engine
    noise_on: { en: "🔊 Focus Noise: On", fr: "🔊 Bruit de fond : Activé" },
    noise_off: { en: "🎧 Focus Noise: Off", fr: "🎧 Bruit de fond : Désactivé" }
};

// Application View Engines & State
let TASK_DATA = null;
let appState = "ENERGY_SELECT";
let activeTab = "RESET"; // Core Tabs: "RESET", "PLANNER", "STATUS" (Mapped to Stats)
let userEnergyTier = "normal";     
let sessionEnergyTier = "normal";  
let currentCategory = null;   
let currentBranch   = null;   
let currentTwigIdx  = 0;      
let maxTasksForSession = 6;

// Customizer Specific States
let customizerActiveCategoryId = 1;
let customizerOpenBranchId = null;

// Local Overrides Databank
let USER_OVERRIDES = {
    _categories: {},
    _branches: {}
};

// Daily Scratchpad State
let SCRATCHPAD_ITEMS = [];
let scratchpadTab = "ROUTINES";
let scratchpadWarningTimeout = null;
let scratchpadWarningText = "";

// Import Error State
let importWarningTimeout = null;
let importWarningText = "";

// Settings restoration state holder
let savedStateBeforeSettings = null;

// Onboarding State
let onboardingIndex = 0;
const ONBOARDING_CARDS = [
    {
        title: { en: "What is this?", fr: "Qu'est-ce que c'est ?" },
        text: { 
            en: "Task Exploder breaks overwhelming tasks into tiny, manageable steps. Built for anyone who struggles to start — whether you have ADHD, low energy days, or just find big tasks hard to face. No timers. No pressure. Just one small thing at a time.",
            fr: "Task Exploder divise les tâches accablantes en micro-étapes gérables. Conçu pour tous ceux qui ont du mal à démarrer — que ce soit à cause d'un TDAH, de journées à faible énergie ou simplement parce que les grandes tâches font peur. Pas de chronomètre. Pas de pression. Juste une petite chose à la fois."
        }
    },
    {
        title: { en: "Energy Tiers", fr: "Niveaux d'Énergie" },
        text: {
            en: "Before each session you pick your energy level — Low, Steady, or High. Be honest with yourself. Low energy tasks are just as valid as high energy ones. The app works around how you feel, not how you think you should feel.",
            fr: "Avant chaque session, vous choisissez votre niveau d'énergie — Bas, Régulier ou Haut. Soyez honnête avec vous-même. Les tâches à faible énergie sont tout aussi valables que les autres. L'application s'adapte à votre état réel, pas à celui que vous devriez avoir."
        }
    },
    {
        title: { en: "Make It Yours", fr: "Personnalisez" },
        text: {
            en: "Every task in the app can be customised to fit your actual home and your actual life. Rename steps, rewrite them, adjust them to match how you do things. Find the Customise option inside any category to make it yours.",
            fr: "Chaque tâche de l'application peut être personnalisée pour s'adapter à votre foyer et votre vie réelle. Renommez les étapes, réécrivez-les, ajustez-les selon vos habitudes. Trouvez l'option Personnaliser dans n'importe quelle catégorie."
        }
    },
    {
        title: { en: "My Day", fr: "Ma Journée" },
        text: {
            en: "The My Day tab keeps everything in one place. Use the scratchpad for quick notes and reminders. Tasks you snooze during a session land in your schedule automatically so nothing gets lost.",
            fr: "L'onglet Ma Journée rassemble tout au même endroit. Utilisez le scratchpad pour des notes rapides et des rappels. Les tâches reportées durant une session s'ajoutent automatiquement à votre calendrier."
        }
    },
    {
        title: { en: "Your Data", fr: "Vos Données" },
        text: {
            en: "Everything is stored on your device. No account, no cloud, no internet needed. Your progress saves automatically — nothing to do. If you ever switch browsers or get a new phone, use the Export option in Settings to take your data with you.",
            fr: "Tout est stocké localement sur votre appareil. Aucun compte, aucun cloud, pas besoin d'Internet. Votre progression est sauvegardée automatiquement. Si vous changez de navigateur ou de téléphone, utilisez l'option Exporter dans les Paramètres."
        }
    },
    {
        title: { en: "Ready", fr: "Prêt(e)" },
        text: {
            en: "That's everything. Pick your energy and take one small step.",
            fr: "C'est tout. Choisissez votre niveau d'énergie et faites un premier petit pas."
        }
    }
];

// Tiny Encouragements Database
const ENCOURAGEMENTS = [
    { en: "Nice.", fr: "Sympa." },
    { en: "Momentum counts.", fr: "L'élan compte." },
    { en: "One step is still a step.", fr: "Un pas est toujours un pas." },
    { en: "Done is done.", fr: "Ce qui est fait est fait." },
    { en: "That's one less thing hanging over you.", fr: "Une chose de moins qui vous pèse." },
    { en: "Progress is progress.", fr: "Le progrès reste du progrès." },
    { en: "Friction reduced.", fr: "Friction réduite." },
    { en: "Keep it simple.", fr: "Faites simple." },
    { en: "Just like that.", fr: "Tout simplement." },
    { en: "Every bit adds up.", fr: "Chaque geste compte." }
];
let toastTimeout = null;

// Performance / Reward Database State
let EXPLODER_REWARDS = {
    momentumPoints: 0,
    momentumBank: 0,
    badges: [],
    roomAura: {
        kitchen: 0, bathroom: 0, living_room: 0, bedroom: 0, laundry: 0, 
        digital_life: 0, life_admin: 0, work_productivity: 0, morning_routine: 0, evening_routine: 0
    },
    winsLedger: [],
    lifetimeWins: 0,
    completedTwigs: [], // Tracks identifiers: "category_code:branch_id:twig_id"
    firstUseDate: null,
    lastUseDate: null,
    activeDaysCount: 0,
    currentConsecutive: 0
};

// Unified Registry of Badges
const BADGE_REGISTRY = [
    { id: "inertia_breaker", name: { en: "Inertia Breaker", fr: "Briseur d'Inertie" }, desc: { en: "Complete any session of 3 or more steps", fr: "Compléter n'importe quelle session de 3 étapes ou plus" }, emoji: "🏁" },
    { id: "momentum_builder", name: { en: "Momentum Builder", fr: "Créateur d'Élan" }, desc: { en: "Complete any session of 6 or more steps", fr: "Compléter n'importe quelle session de 6 étapes ou plus" }, emoji: "🚀" },
    { id: "full_reset", name: { en: "Full Reset", fr: "Réinitialisation Totale" }, desc: { en: "Complete a maximum-intensity 9-step session", fr: "Compléter une session à intensité maximale de 9 étapes" }, emoji: "⚡" },
    { id: "catalyst_50", name: { en: "Catalyst 50", fr: "Catalyseur 50" }, desc: { en: "Reach 50 lifetime micro-task wins", fr: "Atteindre 50 micro-victoires cumulées" }, emoji: "🔥" },
    { id: "century_100", name: { en: "Century Club", fr: "Club des Cent" }, desc: { en: "Reach 100 lifetime micro-task wins", fr: "Atteindre 100 micro-victoires cumulées" }, emoji: "💯" },
    { id: "momentum_200", name: { en: "Apex Momentum", fr: "Élan Suprême" }, desc: { en: "Reach 200 lifetime micro-task wins", fr: "Atteindre 200 micro-victoires cumulées" }, emoji: "👑" },
    { id: "habit_300", name: { en: "Habit Architect", fr: "Architecte des Habitudes" }, desc: { en: "Reach 300 lifetime micro-task wins", fr: "Atteindre 300 micro-victoires cumulées" }, emoji: "🧱" },
    { id: "force_500", name: { en: "Force of Nature", fr: "Force de la Nature" }, desc: { en: "Reach 500 lifetime micro-task wins", fr: "Atteindre 500 micro-victoires cumulées" }, emoji: "🌀" },
    { id: "legend_1000", name: { en: "Legendary Reset", fr: "Réinitialisation Légendaire" }, desc: { en: "Reach 1000 lifetime micro-task wins", fr: "Atteindre 1000 micro-victoires cumulées" }, emoji: "🌟" },
    { id: "sprint_3", name: { en: "3-Day Sprint", fr: "Sprint de 3 Jours" }, desc: { en: "Maintain a 3-day consecutive activity streak", fr: "Maintenir une série d'activité de 3 jours consécutifs" }, emoji: "🏃" },
    { id: "streak_7", name: { en: "Weekly Run", fr: "Série Hebdomadaire" }, desc: { en: "Maintain a 7-day consecutive activity streak", fr: "Maintenir une série d'activité de 7 jours consécutifs" }, emoji: "📅" },
    { id: "roots_3", name: { en: "Put Down Roots", fr: "Prendre Racine" }, desc: { en: "Complete tasks on 3 distinct days", fr: "Compléter des tâches sur 3 jours distincts" }, emoji: "🌱" },
    { id: "loyalty_1_week", name: { en: "Consistent Habit", fr: "Habitude Constante" }, desc: { en: "Complete tasks on 7 distinct days", fr: "Compléter des tâches sur 7 jours distincts" }, emoji: "🌳" },
    { id: "loyalty_1_month", name: { en: "Core Routine", fr: "Routine Fondamentale" }, desc: { en: "Complete tasks on 30 distinct days", fr: "Compléter des tâches sur 30 jours distincts" }, emoji: "🏔️" },
    { id: "loyalty_1_year", name: { en: "Lifetime Discipline", fr: "Discipline d'une Vie" }, desc: { en: "Complete tasks on 365 distinct days", fr: "Compléter des tâches sur 365 jours distincts" }, emoji: "🌌" }
];

// Contextual Help Panel Database Content
const HELP_CONTENT = {
    energy_select: {
        en: "Task Exploder works by matching tasks to how you actually feel right now — not how you think you should feel. Low energy is valid. Steady is progress. High energy is a bonus. Pick honestly and we'll find something that fits. One small step is always better than none.",
        fr: "Task Exploder associe les tâches à votre état actuel, et non à celui que vous devriez avoir. L'énergie basse est valide. Régulier signifie progresser. L'énergie haute est un bonus. Choisissez honnêtement et nous trouverons ce qui vous convient. Un petit pas vaut toujours mieux que rien."
    },
    category_select: {
        en: "Choose the area of your home or life you want to tackle. Each zone contains tasks broken into small steps matched to your energy level. Pick the zone that needs attention right now and we'll guide you from there.",
        fr: "Choisissez la zone de votre maison ou de votre vie que vous souhaitez aborder. Chaque zone contient des tâches divisées en petites étapes adaptées à votre niveau d'énergie. Sélectionnez la zone qui nécessite de l'attention et laissez-vous guider."
    },
    task_twig: {
        en: "This screen shows your current micro-step. Focus on just this one thing. If you can't do it, you can reroll or snooze it. Tap 'Focus Noise' below the task to toggle brown noise — a proven focus aid for ADHD.",
        fr: "Cet écran affiche votre micro-étape actuelle. Concentrez-vous sur cette seule chose. Si vous ne pouvez pas la faire, vous pouvez la relancer ou la reporter. Appuie sur 'Bruit de fond' sous la tâche pour activer le bruit brun — une aide à la concentration reconnue pour le TDAH."
    },
    my_day: {
        en: "My Day has three sections. Routines Due shows any tasks you've scheduled that are ready today. Daily Scratchpad is a quick notepad for anything you want to remember. Tap the Tasks & Schedule button to manage your recurring tasks and customise your tasks to fit your life.",
        fr: "Ma Journée comprend deux sections principales. Routines Dues affiche vos tâches planifiées prêtes aujourd'hui. Le Scratchpad Quotidien est un bloc-notes rapide. Appuyez sur le bouton Tâches & Planification pour configurer vos récurrences et adapter les tâches à votre vie."
    },
    task_schedule: {
        en: "Here you can customise any task to match your home and how you do things — just edit the text directly and it saves automatically. You can also set tasks to repeat on a schedule — daily, weekly, or every few days. Snoozed tasks from your sessions appear here too. When a task is due it shows up in Routines Due on the My Day tab.",
        fr: "Ici, vous pouvez personnaliser n'importe quelle tâche pour qu'elle corresponde à votre maison — modifiez directement le texte pour une sauvegarde automatique. Vous pouvez planifier la répétition des tâches (quotidienne, hebdomadaire, etc.). Les tâches reportées s'affichent également ici et apparaîtront dans vos Routines Dues."
    },
    stats: {
        en: "Your Progress tracks points, sessions, wins, and your daily streak. Room Aura shows the percentage of unique tasks completed in each area — tackle more variety to raise it. Badges unlock automatically as you hit milestones. Keep showing up — it adds up.",
        fr: "Votre progression affiche vos points, sessions, victoires et votre série quotidienne. L'Aura des Pièces indique le pourcentage de tâches uniques accomplies dans chaque zone — variez vos tâches pour l'augmenter. Les badges se débloquent automatiquement."
    },
    settings: {
        en: "Night Mode switches the app between light and dark. Replay Introduction shows the getting started guide again. Export Backup saves all your progress to a file — useful before switching browsers or devices. Import Backup restores from a saved file. The Danger Zone options reset your data permanently — use with caution.",
        fr: "Le mode sombre bascule l'affichage. Rejouer l'Introduction relance le guide de démarrage. L'Export de Sauvegarde conserve votre progression dans un fichier — utile avant de changer d'appareil. Les options de la Zone de Danger suppriment définitivement vos données."
    }
};

// Tracks completions during the active, current session
let activeSessionCompletions = [];
let appContainer = null;

// Translation Helper
function t(key) {
    const lang = localStorage.getItem('task_exploder_language') || 'en';
    if (TRANSLATIONS[key] && TRANSLATIONS[key][lang] !== undefined) {
        return TRANSLATIONS[key][lang];
    }
    return key;
}

function initApp() {
    appContainer = document.getElementById('app');
    
    // Apply loaded theme configuration
    const savedTheme = localStorage.getItem('task_exploder_theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.remove('light-theme');
    } else {
        document.documentElement.classList.add('light-theme');
    }

    // Set English as baseline fall-back if not defined
    const currentLanguage = localStorage.getItem('task_exploder_language') || 'en';

    // Bind global task data safely at runtime initialization with bilingual asset selection
    if (currentLanguage === 'fr' && window.TASK_DATA_FR) {
        TASK_DATA = window.TASK_DATA_FR;
    } else {
        TASK_DATA = window.TASK_DATA;
    }

    if (!TASK_DATA) {
        console.error("Local database window.TASK_DATA is missing. Ensure core_tasks.js or core_tasks_fr.js is loaded in index.html.");
        TASK_DATA = { app_name: "Task Exploder", version: "1.0.0", categories: [] };
    }

    loadOverrides();
    loadRewards();
    loadScratchpad();

    // Map active tasks to validate schedule targets and clean up obsolete entries
    const validTaskIds = [];
    if (TASK_DATA && TASK_DATA.categories) {
        TASK_DATA.categories.forEach(cat => {
            cat.branches.forEach(b => {
                b.twigs.forEach(t => {
                    validTaskIds.push(`${cat.category_code}:${b.branch_id}:${t.id}`);
                });
            });
        });
    }
    cleanupOrphanedSchedules(validTaskIds);

    recalculateRoomAuras();

    // Check language configuration before onboarding check
    const currentLangSet = localStorage.getItem('task_exploder_language');
    const firstRun = localStorage.getItem('task_exploder_first_run');

    if (!currentLangSet && !firstRun) {
        renderLanguageSelectView();
    } else if (!firstRun) {
        onboardingIndex = 0;
        renderOnboarding();
    } else {
        switchTab("RESET");
    }
}

/**
 * FIRST RUN ONLY LANGUAGE SELECT
 */
function renderLanguageSelectView() {
    appState = "LANGUAGE_SELECT";
    appContainer.innerHTML = `
        <div class="language-select-overlay">
            <div class="language-select-card">
                <div class="language-select-content">
                    <h2 class="language-select-h2">${t('lang_select_title_en')}<br><span style="font-weight: 400; font-size: 1.15rem;">${t('lang_select_title_fr')}</span></h2>
                    <p class="language-select-p">${t('lang_select_desc_en')} / ${t('lang_select_desc_fr')}</p>
                </div>
                <div class="button-stack">
                    <button class="btn language-large-btn" onclick="handleLanguageSelection('en')">🇬🇧 English</button>
                    <button class="btn language-large-btn" onclick="handleLanguageSelection('fr')">🇫🇷 Français</button>
                </div>
            </div>
        </div>
    `;
}

function handleLanguageSelection(lang) {
    localStorage.setItem('task_exploder_language', lang);
    onboardingIndex = 0;
    renderOnboarding();
}

/**
 * THEME TOGGLING ENGINE
 */
function toggleTheme() {
    const isLight = document.documentElement.classList.toggle('light-theme');
    localStorage.setItem('task_exploder_theme', isLight ? 'light' : 'dark');
}

/**
 * ERGONOMIC TAB CONTROLLER
 */
function switchTab(tab) {
    activeTab = tab;
    // Always dismiss help panel when transitioning views
    closeHelpPanel();

    if (tab === "RESET") {
        if (appState === "CATEGORY_SELECT") {
            renderCategorySelectView();
        } else if (appState === "BRANCH_SELECT") {
            renderBranchSelectView();
        } else if (appState === "TWIG_ACTIVE") {
            renderTwigActiveView();
        } else if (appState === "MILESTONE_GATEKEEPER") {
            renderMilestoneGatekeeperView();
        } else if (appState === "COMPLETE_VIEW") {
            renderCompleteView(false);
        } else {
            renderEnergySelectView();
        }
    } else if (tab === "PLANNER") {
        renderPlannerTabView();
    } else if (tab === "STATUS") {
        renderStatusTabView();
    }
}

function getBottomNavBarHtml() {
    if (appState === "CUSTOMIZER" || appState === "SETTINGS" || appState === "ONBOARDING" || appState === "LANGUAGE_SELECT") return "";
    return `
        <div class="mobile-nav-bar">
            <button class="mobile-nav-item ${activeTab === 'RESET' ? 'active' : ''}" onclick="switchTab('RESET')">
                <span class="mobile-nav-icon">⚡</span>
                <span>${t('nav_start')}</span>
            </button>
            <button class="mobile-nav-item ${activeTab === 'PLANNER' ? 'active' : ''}" onclick="switchTab('PLANNER')">
                <span class="mobile-nav-icon">📝</span>
                <span>${t('nav_my_day')}</span>
            </button>
            <button class="mobile-nav-item ${activeTab === 'STATUS' ? 'active' : ''}" onclick="switchTab('STATUS')">
                <span class="mobile-nav-icon">📊</span>
                <span>${t('nav_stats')}</span>
            </button>
        </div>
    `;
}

/**
 * TOAST NOTIFICATION UTILITY (TINY ENCOURAGEMENTS)
 */
function showEncouragementToast() {
    let toast = document.getElementById('toast-container');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-container';
        toast.className = 'toast-notification';
        document.body.appendChild(toast);
    }
    
    const randomMsgObj = ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)];
    const currentLanguage = localStorage.getItem('task_exploder_language') || 'en';
    const msg = randomMsgObj[currentLanguage];

    toast.textContent = msg;
    
    toast.classList.add('show');
    
    if (toastTimeout) clearTimeout(toastTimeout);
    
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 1800);
}

/**
 * CONTEXTUAL HELP PANEL UTILITIES
 */
function showHelpPanel(content) {
    closeHelpPanel();

    const backdrop = document.createElement('div');
    backdrop.id = 'help-backdrop';
    backdrop.className = 'help-backdrop';
    backdrop.onclick = closeHelpPanel;

    const panel = document.createElement('div');
    panel.id = 'help-panel';
    panel.className = 'help-panel';

    const closeLabel = (localStorage.getItem('task_exploder_language') === 'fr') ? '✕ Fermer' : '✕ Close';

    panel.innerHTML = `
        <div class="help-panel-header">
            <span class="help-panel-title">💡 Quick Guide</span>
            <button class="help-panel-close-btn" onclick="closeHelpPanel()" aria-label="Close help">${closeLabel}</button>
        </div>
        <div class="help-panel-body">
            <p class="help-panel-text">${content}</p>
        </div>
    `;

    document.body.appendChild(backdrop);
    document.body.appendChild(panel);

    requestAnimationFrame(() => {
        backdrop.classList.add('active');
        panel.classList.add('active');
    });
}

function closeHelpPanel() {
    const backdrop = document.getElementById('help-backdrop');
    const panel = document.getElementById('help-panel');
    if (backdrop) {
        backdrop.classList.remove('active');
        backdrop.addEventListener('transitionend', () => backdrop.remove(), { once: true });
    }
    if (panel) {
        panel.classList.remove('active');
        panel.addEventListener('transitionend', () => panel.remove(), { once: true });
    }
}

function handleHelpClick(key) {
    const lang = localStorage.getItem('task_exploder_language') || 'en';
    if (HELP_CONTENT[key] && HELP_CONTENT[key][lang]) {
        showHelpPanel(HELP_CONTENT[key][lang]);
    }
}

/**
 * OVERRIDE LOOKUP RESOLVERS
 */
function getCategoryName(cat) {
    if (USER_OVERRIDES._categories && USER_OVERRIDES._categories[cat.category_code]) {
        return USER_OVERRIDES._categories[cat.category_code];
    }
    // Return localized default from internal keys inside UI
    const internalKey = `cat_${cat.category_code}`;
    if (TRANSLATIONS[internalKey]) {
        return t(internalKey);
    }
    return cat.category_name;
}

function getBranchName(branch) {
    if (USER_OVERRIDES._branches && USER_OVERRIDES._branches[branch.branch_id]) {
        return USER_OVERRIDES._branches[branch.branch_id];
    }
    return branch.branch_name;
}

function loadOverrides() {
    try {
        const stored = localStorage.getItem('task_exploder_overrides');
        if (stored) {
            const parsed = JSON.parse(stored);
            USER_OVERRIDES = {
                _categories: {},
                _branches: {},
                ...parsed
            };
        }
    } catch (e) {
        console.error("Local Storage reading exception", e);
        USER_OVERRIDES = { _categories: {}, _branches: {} };
    }
}

function saveOverride(branchId, twigId, text) {
    if (!USER_OVERRIDES[branchId]) USER_OVERRIDES[branchId] = {};
    USER_OVERRIDES[branchId][twigId] = text.trim();
    localStorage.setItem('task_exploder_overrides', JSON.stringify(USER_OVERRIDES));
}

function deleteOverride(branchId, twigId) {
    if (USER_OVERRIDES[branchId] && USER_OVERRIDES[branchId][twigId]) {
        delete USER_OVERRIDES[branchId][twigId];
        if (Object.keys(USER_OVERRIDES[branchId]).length === 0) delete USER_OVERRIDES[branchId];
        localStorage.setItem('task_exploder_overrides', JSON.stringify(USER_OVERRIDES));
    }
}

function saveCategoryOverride(catCode, newName) {
    if (!USER_OVERRIDES._categories) USER_OVERRIDES._categories = {};
    USER_OVERRIDES._categories[catCode] = newName.trim();
    localStorage.setItem('task_exploder_overrides', JSON.stringify(USER_OVERRIDES));
}

function deleteCategoryOverride(catCode) {
    if (USER_OVERRIDES._categories && USER_OVERRIDES._categories[catCode]) {
        delete USER_OVERRIDES._categories[catCode];
        localStorage.setItem('task_exploder_overrides', JSON.stringify(USER_OVERRIDES));
    }
}

function saveBranchOverride(branchId, newName) {
    if (!USER_OVERRIDES._branches) USER_OVERRIDES._branches = {};
    USER_OVERRIDES._branches[branchId] = newName.trim();
    localStorage.setItem('task_exploder_overrides', JSON.stringify(USER_OVERRIDES));
}

function deleteBranchOverride(branchId) {
    if (USER_OVERRIDES._branches && USER_OVERRIDES._branches[branchId]) {
        delete USER_OVERRIDES._branches[branchId];
        localStorage.setItem('task_exploder_overrides', JSON.stringify(USER_OVERRIDES));
    }
}

function getTwigText(branchId, twig) {
    const sourceBranchId = twig.source_branch_id || branchId;
    if (USER_OVERRIDES[sourceBranchId] && USER_OVERRIDES[sourceBranchId][twig.id]) {
        return USER_OVERRIDES[sourceBranchId][twig.id];
    }
    return twig.text;
}

/**
 * DAILY SCRATCHPAD PERSISTENCE
 */
function loadScratchpad() {
    try {
        const stored = localStorage.getItem('task_exploder_scratchpad');
        if (stored) {
            SCRATCHPAD_ITEMS = JSON.parse(stored);
        } else {
            SCRATCHPAD_ITEMS = [];
        }
    } catch (e) {
        console.error("Local Storage scratchpad reading exception", e);
        SCRATCHPAD_ITEMS = [];
    }
}

function saveScratchpad() {
    try {
        localStorage.setItem('task_exploder_scratchpad', JSON.stringify(SCRATCHPAD_ITEMS));
    } catch (e) {
        console.error("Local Storage scratchpad writing exception", e);
    }
}

function setPlannerSubTab(tab) {
    scratchpadTab = tab;
    renderPlannerTabView();
}

function showScratchpadWarning(msg) {
    scratchpadWarningText = msg;
    renderPlannerTabView();
    if (scratchpadWarningTimeout) clearTimeout(scratchpadWarningTimeout);
    scratchpadWarningTimeout = setTimeout(() => {
        scratchpadWarningText = "";
        if (appState === "PLANNER_TAB" && activeTab === "PLANNER") {
            renderPlannerTabView();
        }
    }, 3000);
}

function addScratchpadItem() {
    const input = document.getElementById('scratchpad-input');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;
    
    if (SCRATCHPAD_ITEMS.length >= 50) {
        showScratchpadWarning(t('planner_scratchpad_full'));
        return;
    }
    
    SCRATCHPAD_ITEMS.push({
        id: Date.now(),
        text: text
    });
    saveScratchpad();
    input.value = "";
    renderPlannerTabView();
}

function handleScratchpadKey(event) {
    if (event.key === "Enter") {
        addScratchpadItem();
    }
}

function completeScratchpadItem(id) {
    SCRATCHPAD_ITEMS = SCRATCHPAD_ITEMS.filter(item => item.id !== id);
    saveScratchpad();
    showEncouragementToast();
    renderPlannerTabView();
}

function deleteScratchpadItem(id) {
    SCRATCHPAD_ITEMS = SCRATCHPAD_ITEMS.filter(item => item.id !== id);
    saveScratchpad();
    renderPlannerTabView();
}

function loadRewards() {
    try {
        const stored = localStorage.getItem('task_exploder_rewards');
        if (stored) {
            const parsed = JSON.parse(stored);
            EXPLODER_REWARDS = { ...EXPLODER_REWARDS, ...parsed };
        }
    } catch (e) {
        console.error("Local Storage rewards database read error", e);
    }
}

function saveRewards() {
    localStorage.setItem('task_exploder_rewards', JSON.stringify(EXPLODER_REWARDS));
}

function recalculateRoomAuras() {
    if (!TASK_DATA || !TASK_DATA.categories) return;
    
    for (const catCode in EXPLODER_REWARDS.roomAura) {
        EXPLODER_REWARDS.roomAura[catCode] = 0;
    }

    const totalTwigs = {};
    TASK_DATA.categories.forEach(cat => {
        let count = 0;
        cat.branches.forEach(b => {
            count += b.twigs.length;
        });
        totalTwigs[cat.category_code] = count;
    });

    const completionsCount = {};
    for (const catCode in totalTwigs) {
        completionsCount[catCode] = 0;
    }

    if (EXPLODER_REWARDS.completedTwigs) {
        EXPLODER_REWARDS.completedTwigs.forEach(key => {
            const parts = key.split(':');
            const catCode = parts[0];
            if (completionsCount[catCode] !== undefined) {
                completionsCount[catCode]++;
            }
        });
    }

    for (const catCode in totalTwigs) {
        const total = totalTwigs[catCode] || 1;
        const completed = completionsCount[catCode] || 0;
        EXPLODER_REWARDS.roomAura[catCode] = Math.min(100, Math.round((completed / total) * 100));
    }
}

function checkAndUnlockBadge(badgeId) {
    if (!EXPLODER_REWARDS.badges.includes(badgeId)) {
        EXPLODER_REWARDS.badges.push(badgeId);
        return true;
    }
    return false;
}

// Ensure local date matches active profile timezone tracking
function getLocalDateString() {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}

function updateDateAndStreakOnCompletion() {
    const today = getLocalDateString();
    
    if (!EXPLODER_REWARDS.firstUseDate) {
        EXPLODER_REWARDS.firstUseDate = today;
    }

    if (!EXPLODER_REWARDS.lastUseDate) {
        EXPLODER_REWARDS.lastUseDate = today;
        EXPLODER_REWARDS.activeDaysCount = 1;
        EXPLODER_REWARDS.currentConsecutive = 1;
    } else if (EXPLODER_REWARDS.lastUseDate !== today) {
        const prevParts = EXPLODER_REWARDS.lastUseDate.split('-');
        const currParts = today.split('-');
        
        const prevDate = new Date(prevParts[0], prevParts[1] - 1, prevParts[2]);
        const currDate = new Date(currParts[0], currParts[1] - 1, currParts[2]);
        
        const diffTime = Math.abs(currDate - prevDate);
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            EXPLODER_REWARDS.currentConsecutive++;
        } else if (diffDays > 1) {
            EXPLODER_REWARDS.currentConsecutive = 1;
        }
        
        EXPLODER_REWARDS.activeDaysCount++;
        EXPLODER_REWARDS.lastUseDate = today;
    }
}

function runGlobalBadgeChecks(sessionLength = 0) {
    const newlyUnlocked = [];
    const currentLanguage = localStorage.getItem('task_exploder_language') || 'en';

    if (sessionLength >= 3) {
        if (checkAndUnlockBadge("inertia_breaker")) {
            const registryItem = BADGE_REGISTRY.find(b => b.id === "inertia_breaker");
            newlyUnlocked.push(registryItem.name[currentLanguage]);
        }
    }
    if (sessionLength >= 6) {
        if (checkAndUnlockBadge("momentum_builder")) {
            const registryItem = BADGE_REGISTRY.find(b => b.id === "momentum_builder");
            newlyUnlocked.push(registryItem.name[currentLanguage]);
        }
    }
    if (sessionLength >= 9) {
        if (checkAndUnlockBadge("full_reset")) {
            const registryItem = BADGE_REGISTRY.find(b => b.id === "full_reset");
            newlyUnlocked.push(registryItem.name[currentLanguage]);
        }
    }

    const wins = EXPLODER_REWARDS.lifetimeWins || 0;
    const targets = ["catalyst_50", "century_100", "momentum_200", "habit_300", "force_500", "legend_1000"];
    targets.forEach(id => {
        const numericVal = parseInt(id.split('_')[1], 10);
        if (wins >= numericVal) {
            if (checkAndUnlockBadge(id)) {
                const bItem = BADGE_REGISTRY.find(b => b.id === id);
                newlyUnlocked.push(bItem.name[currentLanguage]);
            }
        }
    });

    const streak = EXPLODER_REWARDS.currentConsecutive || 0;
    if (streak >= 3) {
        if (checkAndUnlockBadge("sprint_3")) {
            const bItem = BADGE_REGISTRY.find(b => b.id === "sprint_3");
            newlyUnlocked.push(bItem.name[currentLanguage]);
        }
    }
    if (streak >= 7) {
        if (checkAndUnlockBadge("streak_7")) {
            const bItem = BADGE_REGISTRY.find(b => b.id === "streak_7");
            newlyUnlocked.push(bItem.name[currentLanguage]);
        }
    }

    const activeDays = EXPLODER_REWARDS.activeDaysCount || 0;
    const dailyMilestones = [
        { d: 3, id: "roots_3" },
        { d: 7, id: "loyalty_1_week" },
        { d: 30, id: "loyalty_1_month" },
        { d: 365, id: "loyalty_1_year" }
    ];
    dailyMilestones.forEach(m => {
        if (activeDays >= m.d) {
            if (checkAndUnlockBadge(m.id)) {
                const bItem = BADGE_REGISTRY.find(b => b.id === m.id);
                newlyUnlocked.push(bItem.name[currentLanguage]);
            }
        }
    });

    if (newlyUnlocked.length > 0) {
        saveRewards();
    }
    return newlyUnlocked;
}

function checkLifetimeBadges() {
    runGlobalBadgeChecks(0);
}

function syncSessionToBaseline() {
    sessionEnergyTier = userEnergyTier;
    if (userEnergyTier === "low") maxTasksForSession = 3; 
    else if (userEnergyTier === "normal") maxTasksForSession = 6; 
    else if (userEnergyTier === "high") maxTasksForSession = 9; 
}

/**
 * FIRST-RUN ONBOARDING CONTROLLER
 */
function renderOnboarding() {
    appState = "ONBOARDING";
    let overlay = document.getElementById('onboarding-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'onboarding-overlay';
        overlay.className = 'onboarding-overlay';
        document.body.appendChild(overlay);
    }
    
    const card = ONBOARDING_CARDS[onboardingIndex];
    const currentLanguage = localStorage.getItem('task_exploder_language') || 'en';
    
    // Generate progress dots
    let dotsHtml = '<div class="onboarding-dots">';
    for (let i = 0; i < ONBOARDING_CARDS.length; i++) {
        dotsHtml += `<div class="onboarding-dot ${i === onboardingIndex ? 'active' : ''}"></div>`;
    }
    dotsHtml += '</div>';

    const isFirst = onboardingIndex === 0;
    const isLast = onboardingIndex === ONBOARDING_CARDS.length - 1;

    let footerHtml = '';
    if (isLast) {
        footerHtml = `
            <div class="onboarding-footer centered-single">
                <button class="btn btn-primary onboarding-begin-btn" onclick="handleOnboardingComplete()">${t('onboarding_begin_btn')}</button>
            </div>
        `;
    } else {
        footerHtml = `
            <div class="onboarding-footer">
                ${!isFirst ? `<button class="btn onboarding-back-btn" onclick="handleOnboardingBack()">${t('onboarding_back_btn')}</button>` : '<span></span>'}
                <button class="btn btn-primary onboarding-next-btn" onclick="handleOnboardingNext()">${t('onboarding_next_btn')}</button>
            </div>
        `;
    }

    overlay.innerHTML = `
        <div class="onboarding-card">
            ${dotsHtml}
            <div class="onboarding-content-area">
                <span class="onboarding-subtitle">Card ${onboardingIndex + 1} of ${ONBOARDING_CARDS.length} &mdash; ${card.title[currentLanguage]}</span>
                <p class="onboarding-text">${card.text[currentLanguage]}</p>
            </div>
            ${footerHtml}
        </div>
    `;
}

function handleOnboardingNext() {
    if (onboardingIndex < ONBOARDING_CARDS.length - 1) {
        onboardingIndex++;
        renderOnboarding();
    }
}

function handleOnboardingBack() {
    if (onboardingIndex > 0) {
        onboardingIndex--;
        renderOnboarding();
    }
}

function handleOnboardingComplete() {
    localStorage.setItem('task_exploder_first_run', 'complete');
    const overlay = document.getElementById('onboarding-overlay');
    if (overlay) {
        overlay.remove();
    }
    switchTab("RESET");
}

function replayIntroduction() {
    localStorage.removeItem('task_exploder_first_run');
    
    // Close settings overlay structure first
    if (savedStateBeforeSettings) {
        savedStateBeforeSettings = null;
    }
    
    onboardingIndex = 0;
    renderOnboarding();
}

// BROWN NOISE ENGINE
let audioCtx = null;
let noiseSource = null;

function startBrownNoise() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const bufferSize = 4 * audioCtx.sampleRate;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
        b6 = white * 0.115926;
    }
    noiseSource = audioCtx.createBufferSource();
    noiseSource.buffer = buffer;
    noiseSource.loop = true;
    noiseSource.connect(audioCtx.destination);
    noiseSource.start();
    localStorage.setItem('task_exploder_brown_noise', 'on');
}

function stopBrownNoise() {
    if (noiseSource) { noiseSource.stop(); noiseSource = null; }
    if (audioCtx) { audioCtx.close(); audioCtx = null; }
    localStorage.setItem('task_exploder_brown_noise', 'off');
}

function toggleBrownNoise() {
    const btn = document.getElementById('brown-noise-btn');
    if (audioCtx && noiseSource) {
        stopBrownNoise();
        if (btn) {
            btn.textContent = t('noise_off');
            btn.className = 'btn btn-secondary-muted';
            btn.style.cssText = 'font-size:0.85rem; padding:10px;';
        }
    } else {
        startBrownNoise();
        if (btn) {
            btn.textContent = t('noise_on');
            btn.className = 'btn btn-small';
            btn.style.cssText = 'font-size:0.85rem; padding:10px; background: var(--accent-primary); color: #fff; border-color: transparent;';
        }
    }
}

/**
 * VIEW RENDERING CONTROLLERS
 */

// Tab 1 (RESET / START) - Energy Select Initial View
function renderEnergySelectView() {
    stopBrownNoise();
    appState = "ENERGY_SELECT";
    
    appContainer.innerHTML = `
        <div class="view-layout">
            <div class="meta-group meta-group-relative">
                <span class="progress-text">${t('app_version')}</span>
                <h2>${t('energy_title')}</h2>
                <button class="help-trigger-btn" onclick="handleHelpClick('energy_select')" aria-label="Help">?</button>
            </div>
            <p>${t('energy_subtitle')}</p>

            <div class="button-stack">
                <button class="btn btn-category" onclick="handleEnergySelect('low')">
                    ${t('energy_low_title')}<br><span style="font-size:0.8rem;color:var(--text-muted);font-weight:400;">${t('energy_low_desc')}</span>
                </button>
                <button class="btn btn-category" onclick="handleEnergySelect('normal')">
                    ${t('energy_normal_title')}<br><span style="font-size:0.8rem;color:var(--text-muted);font-weight:400;">${t('energy_normal_desc')}</span>
                </button>
                <button class="btn btn-category" onclick="handleEnergySelect('high')">
                    ${t('energy_high_title')}<br><span style="font-size:0.8rem;color:var(--text-muted);font-weight:400;">${t('energy_high_desc')}</span>
                </button>
            </div>
        </div>
        ${getBottomNavBarHtml()}
    `;
}

// Tab 2 (PLANNER) - Unstructured Daily Workspace & Sandbox Entrance
function renderPlannerTabView() {
    appState = "PLANNER_TAB";
    const todayStr = getLocalDateString();
    const schedData = loadScheduleData();
    const dueTasks = getDueTasks(TASK_DATA, schedData.schedules, todayStr);
    
    let subTabContentHtml = "";
    
    if (scratchpadTab === "ROUTINES") {
        if (dueTasks.length > 0) {
            subTabContentHtml = `
                <div style="display: flex; flex-direction: column; gap: 8px;">
            `;
            dueTasks.forEach(due => {
                const categoryObj = TASK_DATA.categories.find(c => c.category_id === due.categoryCode || c.category_code === due.categoryCode);
                const branchObj = categoryObj ? categoryObj.branches.find(b => b.branch_id === due.branchId) : null;
                const catName = categoryObj ? getCategoryName(categoryObj) : due.categoryName;
                const bName = branchObj ? getBranchName(branchObj) : due.branchName;
                const text = getTwigText(due.branchId, due.twig);
                const doneLabel = (localStorage.getItem('task_exploder_language') === 'fr') ? '✓ Fait' : '✓ Done';
                
                subTabContentHtml += `
                    <div class="due-task-item" style="display: flex; align-items: center; justify-content: space-between; gap: 12px; background: var(--item-bg); padding: 12px 14px; border-radius: 12px; border-left: 3px solid var(--accent-warning); border-top: 1px solid var(--border-color); border-right: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);">
                        <div style="display: flex; flex-direction: column; gap: 2px; flex: 1; text-align: left;">
                            <span style="font-size: 0.72rem; color: var(--accent-primary); font-weight: 600;">${catName} &raquo; ${bName}</span>
                            <span style="font-size: 0.88rem; color: var(--text-main); font-style: italic;">"${text}"</span>
                        </div>
                        <button class="btn btn-small btn-success" style="padding: 6px 10px; font-size: 0.75rem;" onclick="handleCompleteDueTask('${due.taskId}')">${doneLabel}</button>
                    </div>
                `;
            });
            subTabContentHtml += `</div>`;
        } else {
            subTabContentHtml = `
                <div style="font-size: 0.85rem; color: var(--text-muted); text-align: center; padding: 24px; background: var(--item-bg); border-radius: 12px; border: 1px solid var(--border-color);">
                    ${t('planner_routines_empty')}
                </div>
            `;
        }
    } else {
        let scratchpadItemsHtml = "";
        if (scratchpadWarningText) {
            scratchpadItemsHtml += `
                <div class="scratchpad-warning-inline">
                    ⚠️ ${scratchpadWarningText}
                </div>
            `;
        }
        
        if (SCRATCHPAD_ITEMS.length > 0) {
            SCRATCHPAD_ITEMS.forEach(item => {
                scratchpadItemsHtml += `
                    <div class="scratchpad-item">
                        <div style="display: flex; align-items: center; gap: 10px; flex: 1; text-align: left;">
                            <input type="checkbox" style="width: 18px; height: 18px; cursor: pointer;" onclick="completeScratchpadItem(${item.id})">
                            <span style="font-size: 0.9rem; color: var(--text-main); line-height: 1.4;">${item.text}</span>
                        </div>
                        <button style="background: none; border: none; color: #ef4444; font-size: 1.1rem; cursor: pointer; padding: 4px; line-height: 1;" onclick="deleteScratchpadItem(${item.id})">✕</button>
                    </div>
                `;
            });
        } else if (!scratchpadWarningText) {
            scratchpadItemsHtml = `
                <div style="font-size: 0.85rem; color: var(--text-muted); text-align: center; padding: 24px; background: var(--item-bg); border-radius: 12px; border: 1px solid var(--border-color);">
                    ${t('planner_scratchpad_empty')}
                </div>
            `;
        }
        
        subTabContentHtml = `
            <div class="scratchpad-add-row" style="margin-bottom: 12px;">
                <input type="text" id="scratchpad-input" class="custom-input" style="flex: 1;" placeholder="${t('planner_scratchpad_placeholder')}" onkeydown="handleScratchpadKey(event)">
                <button class="btn btn-success" style="padding: 10px 16px; font-size: 0.9rem; border-radius: 12px;" onclick="addScratchpadItem()">${t('planner_scratchpad_add_btn')}</button>
            </div>
            <div class="scratchpad-list">
                ${scratchpadItemsHtml}
            </div>
        `;
    }

    appContainer.innerHTML = `
        <div class="view-layout">
            <div class="meta-group meta-group-relative">
                <span class="progress-text">${t('planner_meta')}</span>
                <h2>${t('planner_heading')}</h2>
                <button class="help-trigger-btn" onclick="handleHelpClick('my_day')" aria-label="Help">?</button>
            </div>
            
            <!-- Highly Prominent Dual Option Tile Cards -->
            <div class="planner-tiles-grid">
                <div class="planner-tile ${scratchpadTab === 'ROUTINES' ? 'active' : ''}" onclick="setPlannerSubTab('ROUTINES')">
                    <span class="planner-tile-icon">📅</span>
                    <span class="planner-tile-label">${t('planner_routines_due')}</span>
                    <span class="planner-tile-badge">${dueTasks.length}</span>
                </div>
                <div class="planner-tile ${scratchpadTab === 'SCRATCHPAD' ? 'active' : ''}" onclick="setPlannerSubTab('SCRATCHPAD')">
                    <span class="planner-tile-icon">📝</span>
                    <span class="planner-tile-label">${t('planner_scratchpad')}</span>
                    <span class="planner-tile-badge">${SCRATCHPAD_ITEMS.length}/50</span>
                </div>
            </div>
            
            <div class="planner-content" style="flex: 1;">
                ${subTabContentHtml}
            </div>

            <!-- Unified Configuration Button Sandbox relocated to Bottom of Planner tab -->
            <div class="button-stack" style="margin-top: 14px;">
                <button class="btn btn-primary" onclick="renderCustomizerView(1)">${t('planner_sandbox_btn')}</button>
            </div>
        </div>
        ${getBottomNavBarHtml()}
    `;
}

// Tab 3 (STATUS) - Metrics & Trophy Cabinet Panel
function renderStatusTabView() {
    appState = "STATUS_TAB";
    recalculateRoomAuras();
    const currentLanguage = localStorage.getItem('task_exploder_language') || 'en';

    let auraGridHtml = `<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 4px;">`;
    TASK_DATA.categories.forEach(cat => {
        const auraVal = EXPLODER_REWARDS.roomAura[cat.category_code] || 0;
        auraGridHtml += `
            <div style="background: var(--item-bg); border: 1px solid var(--border-color); padding: 10px; border-radius: 10px; display: flex; flex-direction: column; gap: 4px;">
                <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: bold;">
                    <span style="color: var(--text-main);">${getCategoryName(cat)}</span>
                    <span style="color: var(--accent-success);">${auraVal}%</span>
                </div>
                <div style="background: var(--input-bg); height: 4px; border-radius: 2px; overflow: hidden; width: 100%;">
                    <div style="background: var(--accent-success); height: 100%; width: ${auraVal}%; transition: width 0.3s ease;"></div>
                </div>
            </div>
        `;
    });
    auraGridHtml += `</div>`;

    // Compact side-by-side Trophy Cabinet achievement cards
    let badgesHtml = `<div class="badges-grid">`;
    BADGE_REGISTRY.forEach(b => {
        const isUnlocked = EXPLODER_REWARDS.badges.includes(b.id);
        const unlockedLabel = (currentLanguage === 'fr') ? '🔓 Débloqué' : '🔓 Unlocked';
        const lockedLabel = (currentLanguage === 'fr') ? '🔒 Verrouillé' : '🔒 Locked';
        badgesHtml += `
            <div class="badge-box ${isUnlocked ? 'unlocked' : 'locked'}">
                <span class="badge-box-icon">${b.emoji}</span>
                <span class="badge-box-title">${b.name[currentLanguage]}</span>
                <span class="badge-box-status">${isUnlocked ? unlockedLabel : lockedLabel}</span>
            </div>
        `;
    });
    badgesHtml += `</div>`;

    let ledgerHtml = `<div style="display: flex; flex-direction: column; gap: 6px; margin-top: 4px; max-height: 180px; overflow-y: auto; background: var(--item-bg); padding: 10px; border-radius: 10px; border: 1px solid var(--border-color); padding-right: 2px;">`;
    if (EXPLODER_REWARDS.winsLedger.length === 0) {
        ledgerHtml += `<div style="font-size: 0.8rem; color: var(--text-muted); text-align: center; padding: 12px;">${t('stats_ledger_empty')}</div>`;
    } else {
        EXPLODER_REWARDS.winsLedger.forEach(entry => {
            const catObj = TASK_DATA.categories.find(c => c.category_code === entry.categoryCode);
            const branchObj = catObj ? catObj.branches.find(b => b.branch_id === entry.branchId) : null;
            const catName = catObj ? getCategoryName(catObj) : entry.categoryName;
            const branchName = branchObj ? getBranchName(branchObj) : entry.branchName;
            
            const date = new Date(entry.timestamp);
            const timeStr = date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            ledgerHtml += `
                <div style="font-size: 0.75rem; border-bottom: 1px solid var(--border-color); padding-bottom: 6px; margin-bottom: 4px; display: flex; flex-direction: column; gap: 1px; text-align: left;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.65rem; color: var(--text-muted);">
                        <span style="color: var(--accent-primary); font-weight: 600;">${catName} (${branchName})</span>
                        <span>${timeStr}</span>
                    </div>
                    <span style="color: var(--text-main); font-style: italic;">"${entry.text}"</span>
                </div>
            `;
        });
    }
    ledgerHtml += `</div>`;

    appContainer.innerHTML = `
        <div class="view-layout">
            <button class="settings-gear-btn" onclick="openSettingsView()" aria-label="Settings Menu" style="top: 0; right: 0;">⚙️</button>
            <div class="meta-group meta-group-relative offset-gear">
                <span class="progress-text">${t('stats_meta')}</span>
                <h2>${t('stats_heading')}</h2>
                <button class="help-trigger-btn" onclick="handleHelpClick('stats')" aria-label="Help">?</button>
            </div>

            <!-- Core Stats Grid -->
            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px;">
                <div style="background: var(--item-bg); border: 1px solid var(--border-color); border-radius: 10px; padding: 8px 2px; text-align: center;">
                    <span style="font-size: 0.6rem; color: var(--text-muted); text-transform: uppercase; display: block; font-weight:700;">${t('stats_points_label')}</span>
                    <span style="font-size: 0.95rem; font-weight: bold; color: var(--text-main);">${EXPLODER_REWARDS.momentumPoints}</span>
                </div>
                <div style="background: var(--item-bg); border: 1px solid var(--border-color); border-radius: 10px; padding: 8px 2px; text-align: center;">
                    <span style="font-size: 0.6rem; color: var(--text-muted); text-transform: uppercase; display: block; font-weight:700;">${t('stats_sessions_label')}</span>
                    <span style="font-size: 0.95rem; font-weight: bold; color: var(--accent-success);">${EXPLODER_REWARDS.momentumBank}</span>
                </div>
                <div style="background: var(--item-bg); border: 1px solid var(--border-color); border-radius: 10px; padding: 8px 2px; text-align: center;">
                    <span style="font-size: 0.6rem; color: var(--text-muted); text-transform: uppercase; display: block; font-weight:700;">${t('stats_wins_label')}</span>
                    <span style="font-size: 0.95rem; font-weight: bold; color: var(--accent-warning);">${EXPLODER_REWARDS.lifetimeWins}</span>
                </div>
                <div style="background: var(--item-bg); border: 1px solid var(--border-color); border-radius: 10px; padding: 8px 2px; text-align: center;">
                    <span style="font-size: 0.6rem; color: var(--text-muted); text-transform: uppercase; display: block; font-weight:700;">${t('stats_streak_label')}</span>
                    <span style="font-size: 0.95rem; font-weight: bold; color: #f43f5e;">🔥 ${EXPLODER_REWARDS.currentConsecutive || 0}d</span>
                </div>
                <div style="background: var(--item-bg); border: 1px solid var(--border-color); border-radius: 10px; padding: 8px 2px; text-align: center;">
                    <span style="font-size: 0.6rem; color: var(--text-muted); text-transform: uppercase; display: block; font-weight:700;">${t('stats_days_label')}</span>
                    <span style="font-size: 0.95rem; font-weight: bold; color: #3b82f6;">📅 ${EXPLODER_REWARDS.activeDaysCount || 0}d</span>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 14px;">
                <div>
                    <span style="font-size: 0.75rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">${t('stats_room_aura_label')}</span>
                    <span class="room-aura-subtitle">${t('stats_room_aura_desc')}</span>
                    ${auraGridHtml}
                </div>

                <div>
                    <span style="font-size: 0.75rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">${t('stats_unlocked_badges_label')}</span>
                    ${badgesHtml}
                </div>

                <div>
                    <span style="font-size: 0.75rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">${t('stats_wins_ledger_label')}</span>
                    ${ledgerHtml}
                </div>
            </div>
        </div>
        ${getBottomNavBarHtml()}
    `;
}

function handleEnergySelect(tier) {
    userEnergyTier = tier;
    syncSessionToBaseline();
    activeSessionCompletions = []; 
    renderCategorySelectView();
}

function renderCategorySelectView() {
    appState = "CATEGORY_SELECT";
    let html = `
        <div class="view-layout">
            <div class="meta-group meta-group-relative">
                <span class="progress-text">${t('battery_config_prefix')}${userEnergyTier.toUpperCase()}</span>
                <h2>${t('select_target_zone')}</h2>
                <button class="help-trigger-btn" onclick="handleHelpClick('category_select')" aria-label="Help">?</button>
            </div>
            <div class="category-grid">
                <button class="btn btn-category" style="border-color: var(--accent-warning); background: var(--surprise-bg); grid-column: span 2;" onclick="handleRandomCategoryClick()">
                    ${t('surprise_me_all')}
                </button>
    `;

    TASK_DATA.categories.forEach(cat => {
        html += `<button class="btn btn-category" onclick="handleCategoryClick(${cat.category_id})">${getCategoryName(cat)}</button>`;
    });

    html += `
            </div>
            <button class="btn" style="margin-top: 4px; font-size: 0.9rem;" onclick="renderEnergySelectView()">${t('change_battery_level')}</button>
        </div>
        ${getBottomNavBarHtml()}
    `;
    appContainer.innerHTML = html;
}

function handleCategoryClick(id) {
    currentCategory = TASK_DATA.categories.find(c => c.category_id === id);
    renderBranchSelectView();
}

function handleRandomCategoryClick() {
    const allLow = [];
    const allNormal = [];
    const allHigh = [];

    TASK_DATA.categories.forEach(cat => {
        if (cat.category_code === "morning_routine" || cat.category_code === "evening_routine") {
            return;
        }
        cat.branches.forEach(branch => {
            branch.twigs.forEach(twig => {
                const twigCopy = {
                    ...twig,
                    source_branch_id: branch.branch_id,
                    source_category_name: getCategoryName(cat),
                    source_branch_name: getBranchName(branch),
                    source_category_code: cat.category_code
                };
                if (twig.tier === "low") allLow.push(twigCopy);
                else if (twig.tier === "normal") allNormal.push(twigCopy);
                else if (twig.tier === "high") allHigh.push(twigCopy);
            });
        });
    });

    function getRandomSample(arr, n) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    }

    const selectedLow = getRandomSample(allLow, 3);
    const selectedNormal = getRandomSample(allNormal, 2);
    const selectedHigh = getRandomSample(allHigh, 4);

    const randomTwigs = [
        ...selectedLow,     
        ...selectedNormal,  
        ...selectedHigh     
    ];

    currentCategory = {
        category_id: 999,
        category_code: "random",
        category_name: (localStorage.getItem('task_exploder_language') === 'fr') ? "Mode Chaos" : "Chaos Mode"
    };

    currentBranch = {
        branch_id: "random_mix",
        branch_name: (localStorage.getItem('task_exploder_language') === 'fr') ? "Mélange aléatoire" : "Random Chaos Deck",
        twigs: randomTwigs
    };

    currentTwigIdx = 0;
    renderTwigActiveView();
}

function handleCategoryRandomClick() {
    const allLow = [];
    const allNormal = [];
    const allHigh = [];

    currentCategory.branches.forEach(branch => {
        branch.twigs.forEach(twig => {
            const twigCopy = {
                ...twig,
                source_branch_id: branch.branch_id,
                source_category_name: getCategoryName(currentCategory),
                source_branch_name: getBranchName(branch),
                source_category_code: currentCategory.category_code
            };
            if (twig.tier === "low") allLow.push(twigCopy);
            else if (twig.tier === "normal") allNormal.push(twigCopy);
            else if (twig.tier === "high") allHigh.push(twigCopy);
        });
    });

    function getRandomSample(arr, n) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    }

    const selectedLow = getRandomSample(allLow, 3);
    const selectedNormal = getRandomSample(allNormal, 2);
    const selectedHigh = getRandomSample(allHigh, 4);

    const randomTwigs = [
        ...selectedLow,     
        ...selectedNormal,  
        ...selectedHigh     
    ];

    const mixSuffix = t('surprise_me_cat_suffix');
    currentBranch = {
        branch_id: "category_random_mix",
        branch_name: `${t('surprise_me_cat_prefix')}${getCategoryName(currentCategory)}${mixSuffix}`,
        twigs: randomTwigs
    };

    currentTwigIdx = 0;
    renderTwigActiveView();
}

function renderBranchSelectView() {
    appState = "BRANCH_SELECT";
    
    let categoryRandomButtonHtml = "";
    if (currentCategory.category_code !== "morning_routine" && currentCategory.category_code !== "evening_routine") {
        categoryRandomButtonHtml = `
            <button class="btn" style="justify-content: flex-start; border-color: var(--accent-warning); background: var(--surprise-bg);" onclick="handleCategoryRandomClick()">
                ${t('surprise_me_cat_prefix')}${getCategoryName(currentCategory)}${t('surprise_me_cat_suffix')}
            </button>
        `;
    }

    let html = `
        <div class="view-layout">
            <div class="meta-group">
                <span class="progress-text">${getCategoryName(currentCategory)}${t('focus_title_suffix')}</span>
                <h2>${t('workspace_friction_title')}</h2>
            </div>
            <div class="button-stack">
                ${categoryRandomButtonHtml}
    `;

    currentCategory.branches.forEach(b => {
        html += `<button class="btn" style="justify-content: flex-start;" onclick="handleBranchClick('${b.branch_id}')">🎯 &nbsp; ${getBranchName(b)}</button>`;
    });

    html += `
            </div>
            <button class="btn" style="font-size: 0.9rem;" onclick="renderCategorySelectView()">${t('change_room')}</button>
        </div>
        ${getBottomNavBarHtml()}
    `;
    appContainer.innerHTML = html;
}

function handleBranchClick(id) {
    const originalBranch = currentCategory.branches.find(b => b.branch_id === id);
    currentBranch = JSON.parse(JSON.stringify(originalBranch));
    currentTwigIdx = 0;
    renderTwigActiveView();
}

function renderTwigActiveView() {
    appState = "TWIG_ACTIVE";
    const twig = currentBranch.twigs[currentTwigIdx];
    const displayedText = getTwigText(currentBranch.branch_id, twig);

    let label = `${getCategoryName(currentCategory)} &raquo; ${getBranchName(currentBranch)}`;
    
    if (currentBranch.branch_id === "random_mix" && twig.source_category_code) {
        const sc = TASK_DATA.categories.find(c => c.category_code === twig.source_category_code);
        const sb = sc ? sc.branches.find(b => b.branch_id === twig.source_branch_id) : null;
        const scName = sc ? getCategoryName(sc) : twig.source_category_name;
        const sbName = sb ? getBranchName(sb) : twig.source_branch_name;
        label = `${t('random_mix_label')} &raquo; ${scName} (${sbName})`;
    } else if (currentBranch.branch_id === "category_random_mix" && twig.source_branch_id) {
        const sb = currentCategory.branches.find(b => b.branch_id === twig.source_branch_id);
        const sbName = sb ? getBranchName(sb) : twig.source_branch_name;
        label = `${t('random_category_prefix')}${getCategoryName(currentCategory)} &raquo; ${sbName}`;
    }

    if (localStorage.getItem('task_exploder_brown_noise') === 'on') {
        if (!audioCtx || !noiseSource) {
            startBrownNoise();
        }
    }
    
    const isNoiseActive = !!(audioCtx && noiseSource);

    appContainer.innerHTML = `
        <div class="view-layout">
            <div class="meta-group meta-group-relative">
                <span class="progress-text">${label}</span>
                <h2>${t('step_indicator')}${currentTwigIdx + 1}${t('step_separator')}${maxTasksForSession}</h2>
                <button class="help-trigger-btn" onclick="handleHelpClick('task_twig')" aria-label="Help">?</button>
            </div>
            
            <div class="twig-card" id="activeTwigCard">
                <span id="activeTwigText" style="line-height: 1.4;">"${displayedText}"</span>
                <button class="pencil-btn" onclick="openLiveInlineEdit()">✏️</button>
            </div>

            <button id="brown-noise-btn" 
                class="${isNoiseActive ? 'btn btn-small' : 'btn btn-secondary-muted'}" 
                onclick="toggleBrownNoise()" 
                style="${isNoiseActive ? 'font-size:0.85rem; padding:10px; background: var(--accent-primary); color: #fff; border-color: transparent;' : 'font-size:0.85rem; padding: 10px;'}">
                ${isNoiseActive ? t('noise_on') : t('noise_off')}
            </button>

            <div id="liveActionArea" class="live-action-area button-stack" style="min-height: 110px; display: flex; flex-direction: column; justify-content: center;">
                <!-- State A: Default View -->
                <div id="twig-state-default" class="button-stack" style="display: flex; flex-direction: column; width: 100%; gap: 10px;">
                    <button class="btn btn-primary" onclick="handleTwigDone()">${t('done_btn')}</button>
                    <button class="btn btn-secondary-muted" onclick="showActiveTwigOptions()">${t('cant_do_this_btn')}</button>
                </div>

                <!-- State B: Options View -->
                <div id="twig-state-options" class="button-stack" style="display: none; flex-direction: column; gap: 10px; width: 100%;">
                    <div style="display: flex; gap: 12px; width: 100%;">
                        <button class="btn btn-option-reroll" style="flex: 1;" onclick="handleTwigReroll()">${t('reroll_btn')}</button>
                        <button class="btn btn-option-snooze" style="flex: 1;" onclick="handleTwigSnooze()">${t('snooze_btn')}</button>
                    </div>
                    <button class="btn btn-small" style="background: var(--btn-default-bg); border: 1px solid var(--border-color);" onclick="hideActiveTwigOptions()">${t('nevermind_back')}</button>
                </div>
            </div>
        </div>
        ${getBottomNavBarHtml()}
    `;
}

function showActiveTwigOptions() {
    const defState = document.getElementById('twig-state-default');
    const optState = document.getElementById('twig-state-options');
    if (defState && optState) {
        defState.style.display = 'none';
        optState.style.display = 'flex';
    }
}

function hideActiveTwigOptions() {
    const defState = document.getElementById('twig-state-default');
    const optState = document.getElementById('twig-state-options');
    if (defState && optState) {
        defState.style.display = 'flex';
        optState.style.display = 'none';
    }
}

function handleTwigReroll() {
    if (!currentBranch || !currentBranch.twigs || currentBranch.twigs.length === 0) return;
    const currentTwig = currentBranch.twigs[currentTwigIdx];
    const tier = currentTwig.tier;
    const isChaos = (currentCategory.category_code === "random");

    const pool = [];
    TASK_DATA.categories.forEach(cat => {
        if (!isChaos && cat.category_code !== currentCategory.category_code) {
            return;
        }
        cat.branches.forEach(b => {
            b.twigs.forEach(t => {
                if (t.tier === tier && t.id !== currentTwig.id) {
                    pool.push({
                        ...t,
                        source_branch_id: b.branch_id,
                        source_category_name: getCategoryName(cat),
                        source_branch_name: getBranchName(b),
                        source_category_code: cat.category_code
                    });
                }
            });
        });
    });

    if (pool.length > 0) {
        const randomNewTwig = pool[Math.floor(Math.random() * pool.length)];
        currentBranch.twigs[currentTwigIdx] = randomNewTwig;
        renderTwigActiveView();
    } else {
        alert(t('no_replacement_found'));
    }
}

function handleTwigSnooze() {
    if (!currentBranch || !currentBranch.twigs || currentBranch.twigs.length === 0) return;
    const twig = currentBranch.twigs[currentTwigIdx];
    const categoryCode = twig.source_category_code || currentCategory.category_code;
    const branchId = twig.source_branch_id || currentBranch.branch_id;
    const twigId = twig.id;
    const twigKey = `${categoryCode}:${branchId}:${twigId}`;

    const todayStr = getLocalDateString();
    const existingSched = getTaskSchedule(twigKey);
    
    existingSched.nextDueDate = todayStr;
    if (existingSched.recurrenceType === "none") {
        existingSched.recurrenceType = "daily";
    }
    setTaskSchedule(twigKey, existingSched);

    const tier = twig.tier;
    const isChaos = (currentCategory.category_code === "random");
    const pool = [];
    TASK_DATA.categories.forEach(cat => {
        if (!isChaos && cat.category_code !== currentCategory.category_code) {
            return;
        }
        cat.branches.forEach(b => {
            b.twigs.forEach(t => {
                if (t.tier === tier && t.id !== twig.id) {
                    pool.push({
                        ...t,
                        source_branch_id: b.branch_id,
                        source_category_name: getCategoryName(cat),
                        source_branch_name: getBranchName(b),
                        source_category_code: cat.category_code
                    });
                }
            });
        });
    });

    if (pool.length > 0) {
        const randomNewTwig = pool[Math.floor(Math.random() * pool.length)];
        currentBranch.twigs[currentTwigIdx] = randomNewTwig;
        showEncouragementToast();
        renderTwigActiveView();
    } else {
        alert(t('no_replacement_found_snooze'));
    }
}

function openLiveInlineEdit() {
    const twig = currentBranch.twigs[currentTwigIdx];
    const textValue = getTwigText(currentBranch.branch_id, twig);
    
    document.getElementById('activeTwigCard').innerHTML = `
        <div style="width: 100%; display: flex; flex-direction: column; gap: 10px;">
            <span style="font-size:0.8rem; color:var(--accent-primary); font-weight:bold;">${t('tweak_on_the_fly')}</span>
            <textarea id="liveTextarea" class="custom-textarea" rows="2">${textValue}</textarea>
            <div style="display: flex; gap: 6px; justify-content: flex-end;">
                <button class="btn btn-small" style="background: var(--border-color)" onclick="renderTwigActiveView()">${t('cancel_btn')}</button>
                <button class="btn btn-small" style="background:var(--accent-warning); border-color: transparent;" onclick="resetLiveDefault()">${t('reset_btn')}</button>
                <button class="btn btn-small btn-success" onclick="saveLiveEdit()">${t('save_btn')}</button>
            </div>
        </div>
    `;
    const actions = document.getElementById('liveActionArea');
    actions.style.opacity = "0.2";
    actions.style.pointerEvents = "none";
}

function saveLiveEdit() {
    const val = document.getElementById('liveTextarea').value;
    const twig = currentBranch.twigs[currentTwigIdx];
    const targetBranchId = twig.source_branch_id || currentBranch.branch_id;
    if (val.trim()) saveOverride(targetBranchId, twig.id, val);
    renderTwigActiveView();
}

function resetLiveDefault() {
    const twig = currentBranch.twigs[currentTwigIdx];
    const targetBranchId = twig.source_branch_id || currentBranch.branch_id;
    deleteOverride(targetBranchId, twig.id);
    renderTwigActiveView();
}

function handleTwigDone() {
    const twig = currentBranch.twigs[currentTwigIdx];
    const displayedText = getTwigText(currentBranch.branch_id, twig);
    const categoryCode = twig.source_category_code || currentCategory.category_code;
    const branchId = twig.source_branch_id || currentBranch.branch_id;
    const twigId = twig.id;
    const twigKey = `${categoryCode}:${branchId}:${twigId}`;

    const existingSched = getTaskSchedule(twigKey);
    if (existingSched && existingSched.recurrenceType !== "none") {
        const todayStr = getLocalDateString();
        const updated = updateCompletion(twigKey, existingSched, todayStr);
        setTaskSchedule(twigKey, updated);
    }

    const catObj = TASK_DATA.categories.find(c => c.category_code === categoryCode);
    const branchObj = catObj ? catObj.branches.find(b => b.branch_id === branchId) : null;
    const catName = catObj ? getCategoryName(catObj) : (twig.source_category_name || currentCategory.category_name);
    const bName = branchObj ? getBranchName(branchObj) : (twig.source_branch_name || currentBranch.branch_name);

    activeSessionCompletions.push({
        text: displayedText,
        categoryName: catName,
        branchName: bName
    });

    EXPLODER_REWARDS.momentumPoints++;
    EXPLODER_REWARDS.lifetimeWins++;

    updateDateAndStreakOnCompletion();

    if (categoryCode !== "random" && !EXPLODER_REWARDS.completedTwigs.includes(twigKey)) {
        EXPLODER_REWARDS.completedTwigs.push(twigKey);
    }

    const ledgerEntry = {
        timestamp: new Date().toISOString(),
        twigId: twigId,
        categoryCode: categoryCode,
        branchId: branchId,
        categoryName: catName,
        branchName: bName,
        text: displayedText
    };
    EXPLODER_REWARDS.winsLedger.unshift(ledgerEntry);
    if (EXPLODER_REWARDS.winsLedger.length > 50) {
        EXPLODER_REWARDS.winsLedger.pop();
    }

    recalculateRoomAuras();
    checkLifetimeBadges();
    saveRewards();

    showEncouragementToast();

    currentTwigIdx++;
    if (currentTwigIdx >= maxTasksForSession) {
        if (sessionEnergyTier === "low" || sessionEnergyTier === "normal") {
            renderMilestoneGatekeeperView();
        } else {
            renderCompleteView(false);
        }
    } else {
        renderTwigActiveView();
    }
}

function renderMilestoneGatekeeperView() {
    appState = "MILESTONE_GATEKEEPER";
    const prefix = t('milestone_met_prefix');
    const suffix = t('milestone_met_suffix');
    const formattedDesc = t('inertia_broken_desc').replace('{count}', currentTwigIdx);

    appContainer.innerHTML = `
        <div class="view-layout">
            <div class="meta-group">
                <span class="progress-text" style="color:var(--accent-warning)">${prefix}${sessionEnergyTier.toUpperCase()}${suffix}</span>
                <h2>${t('inertia_broken_title')}</h2>
            </div>
            <p>${formattedDesc}</p>
            <div class="button-stack">
                <button class="btn btn-success" onclick="extendSession()">${t('keep_going_btn')}</button>
                <button class="btn" onclick="renderCompleteView(true)">${t('stop_claim_victory')}</button>
            </div>
        </div>
        ${getBottomNavBarHtml()}
    `;
}

function extendSession() {
    if (sessionEnergyTier === "low") sessionEnergyTier = "normal";
    else if (sessionEnergyTier === "normal") sessionEnergyTier = "high";
    maxTasksForSession = Math.min(maxTasksForSession + 3, 9);
    renderTwigActiveView();
}

function renderCompleteView(earlyExit) {
    stopBrownNoise();
    appState = "COMPLETE_VIEW";
    EXPLODER_REWARDS.momentumBank++;

    const newlyUnlockedBadges = runGlobalBadgeChecks(currentTwigIdx);
    saveRewards();

    const reflections = [
        "You reduced friction in your environment.",
        "Your future self will appreciate this effort.",
        "You protected your energy and still made progress.",
        "Momentum is built step by step. You proved that today.",
        "You respected your mental battery and chose action anyway.",
        "A small shift in physical space creates a large shift in mental clarity."
    ];
    const reflectionsFr = [
        "Vous avez réduit les frictions de votre environnement.",
        "Votre futur moi appréciera grandement cet effort.",
        "Vous avez préservé votre énergie tout en progressant.",
        "L'élan se construit pas à pas. Vous l'avez prouvé aujourd'hui.",
        "Vous avez respecté votre batterie mentale et agi malgré tout.",
        "Un petit changement d'espace crée une grande clarté d'esprit."
    ];
    
    const isFr = (localStorage.getItem('task_exploder_language') === 'fr');
    const pool = isFr ? reflectionsFr : reflections;
    const randomReflection = pool[Math.floor(Math.random() * pool.length)];

    let summaryHtml = `<div style="display: flex; flex-direction: column; gap: 8px; margin-top: 12px; max-height: 200px; overflow-y: auto; background: var(--panel-bg); padding: 16px; border-radius: 12px; border: 1px solid var(--border-color); text-align: left; padding-right: 2px;">`;
    activeSessionCompletions.forEach((item, index) => {
        summaryHtml += `
            <div style="font-size: 0.95rem; border-bottom: 1px solid var(--border-color); padding-bottom: 8px; margin-bottom: 4px; display: flex; flex-direction: column; gap: 2px;">
                <span style="font-size: 0.75rem; color: var(--accent-primary); font-weight: 600;">STEP ${index + 1} &bull; ${item.categoryName} (${item.branchName})</span>
                <span style="color: var(--text-main); font-style: italic;">"${item.text}"</span>
            </div>
        `;
    });
    summaryHtml += `</div>`;

    let badgeNotifyHtml = "";
    if (newlyUnlockedBadges.length > 0) {
        const badgeUnlockTitle = (isFr) ? '🏆 Badge Débloqué !' : '🏆 Badge Unlocked!';
        badgeNotifyHtml = `
            <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--accent-success); border-radius: 12px; padding: 12px; margin-top: 12px; text-align: center;">
                <span style="color: var(--accent-success); font-weight: bold; font-size: 1rem;">${badgeUnlockTitle}</span>
                <div style="font-size: 0.9rem; margin-top: 4px; color: var(--text-main); font-weight: 600;">
                    ${newlyUnlockedBadges.join(" & ")}
                </div>
            </div>
        `;
    }

    appContainer.innerHTML = `
        <div class="view-layout">
            <div class="meta-group">
                <span class="progress-text" style="color:var(--accent-success)">${t('session_horizon_restored')}</span>
                <h2>${earlyExit ? t('smart_move_title') : t('area_restored_title')}</h2>
            </div>
            
            <p style="font-size: 1.05rem; color: var(--text-main); font-weight: 500; font-style: italic; margin-top: 4px;">
                "${randomReflection}"
            </p>

            <div style="margin-top: 4px;">
                <span style="font-size: 0.85rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">${t('visual_closure_title')}</span>
                ${summaryHtml}
            </div>

            ${badgeNotifyHtml}

            <div style="display: flex; gap: 12px; margin-top: 12px;">
                <button class="btn btn-primary" style="flex: 1;" onclick="handleCategorySelectView()">${t('return_to_zones')}</button>
                <button class="btn" style="flex: 1; background: var(--btn-default-bg);" onclick="switchTab('STATUS')">${t('go_to_stats')}</button>
            </div>
        </div>
        ${getBottomNavBarHtml()}
    `;
}

function handleCategorySelectView() {
    currentCategory = null;
    currentBranch = null;
    currentTwigIdx = 0;
    activeSessionCompletions = []; 
    syncSessionToBaseline(); 
    renderCategorySelectView();
}

/**
 * TREE SANDBOX & CONFIGURATION TAB
 */
function renderCustomizerView(activeCategoryId) {
    appState = "CUSTOMIZER";
    customizerActiveCategoryId = activeCategoryId;
    
    const category = TASK_DATA.categories.find(c => c.category_id === activeCategoryId) || TASK_DATA.categories[0];

    let categoryTabsHtml = `<div class="tabs-container">`;
    TASK_DATA.categories.forEach(cat => {
        const isActive = cat.category_id === category.category_id;
        const auraVal = EXPLODER_REWARDS.roomAura[cat.category_code] || 0;
        
        categoryTabsHtml += `
            <button class="btn btn-small" 
                    style="background: ${isActive ? 'var(--accent-primary)' : 'var(--btn-default-bg)'}; color: ${isActive ? '#ffffff' : 'var(--text-main)'}; white-space: nowrap; display: flex; flex-direction: column; align-items: center; gap: 2px;"
                    onclick="renderCustomizerView(${cat.category_id})">
                <span>${getCategoryName(cat)}</span>
                <span style="font-size: 0.7rem; opacity: 0.8; color: ${auraVal > 0 ? 'var(--accent-success)' : 'var(--text-muted)'}">${auraVal}% Aura</span>
            </button>
        `;
    });
    categoryTabsHtml += `</div>`;

    let categoryRenameHtml = `
        <div style="background: var(--item-bg); border: 1px solid var(--border-color); border-radius: 12px; padding: 12px; margin-bottom: 16px; text-align: left;">
            <span style="font-size: 0.75rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase;">${t('customizer_cat_override_label')}</span>
            <div style="display: flex; gap: 8px; margin-top: 6px;">
                <input type="text" id="custom-cat-input" class="custom-input" style="flex:1;" value="${getCategoryName(category)}">
                <button class="btn btn-small btn-success" onclick="saveCategoryNameOverride('${category.category_code}')">${t('save_btn')}</button>
                ${USER_OVERRIDES._categories && USER_OVERRIDES._categories[category.category_code] ? `<button class="btn btn-small" style="background:#4a2222; border-color: transparent; color:#ffdddd;" onclick="resetCategoryNameOverride('${category.category_code}')">${t('reset_btn')}</button>` : ''}
            </div>
        </div>
    `;

    let accordionsHtml = `<div style="display: flex; flex-direction: column; gap: 10px;">`;
    category.branches.forEach(branch => {
        const isBranchOpen = customizerOpenBranchId === branch.branch_id;
        
        accordionsHtml += `
            <div class="branch-accordion ${isBranchOpen ? 'open' : ''}">
                <div class="branch-header" onclick="toggleCustomizerBranch('${branch.branch_id}')">
                    <span>🎯 ${getBranchName(branch)}</span>
                    <span class="arrow">&rarr;</span>
                </div>
                <div class="branch-content">
                    <div style="background: var(--input-bg); border: 1px dashed var(--border-color); border-radius: 12px; padding: 10px; margin-bottom: 12px; text-align: left;">
                        <span style="font-size: 0.72rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase;">${t('customizer_section_override_label')}</span>
                        <div style="display: flex; gap: 8px; margin-top: 4px;">
                            <input type="text" id="custom-branch-input-${branch.branch_id}" class="custom-input" style="flex:1; font-size: 0.85rem;" value="${getBranchName(branch)}">
                            <button class="btn btn-small btn-success" style="padding: 4px 8px; font-size: 0.75rem;" onclick="saveBranchNameOverride('${branch.branch_id}')">${t('save_btn')}</button>
                            ${USER_OVERRIDES._branches && USER_OVERRIDES._branches[branch.branch_id] ? `<button class="btn btn-small" style="background:#4a2222; padding: 4px 8px; font-size: 0.75rem; border-color: transparent; color:#ffdddd;" onclick="resetBranchNameOverride('${branch.branch_id}')">${t('reset_btn')}</button>` : ''}
                        </div>
                    </div>
        `;

        branch.twigs.forEach(twig => {
            const currentVal = getTwigText(branch.branch_id, twig);
            const isModified = USER_OVERRIDES[branch.branch_id] && USER_OVERRIDES[branch.branch_id][twig.id];
            
            const taskId = `${category.category_code}:${branch.branch_id}:${twig.id}`;
            const sched = getTaskSchedule(taskId);
            const hasInterval = sched.recurrenceType === "everyXDays";
            const intervalStyle = hasInterval ? "display: inline-block;" : "display: none;";
            const lastCompText = sched.lastCompletedDate ? sched.lastCompletedDate : t('customizer_never');
            const nextDueText = sched.nextDueDate ? sched.nextDueDate : "N/A";

            accordionsHtml += `
                <div class="customizer-twig-item ${isModified ? 'modified' : ''}">
                    <div class="twig-meta-row">
                        <span>${t('customizer_task_label_prefix')}${twig.id} (${twig.tier.toUpperCase()}${t('customizer_task_label_suffix')})</span>
                        ${isModified ? `<span style="color:var(--accent-warning); font-weight:bold;">${t('customizer_modified_tag')}</span>` : `<span>${t('customizer_default_tag')}</span>`}
                    </div>
                    
                    <textarea 
                        id="customizer-textarea-${branch.branch_id}-${twig.id}" 
                        class="custom-textarea" 
                        rows="2"
                        onchange="saveCustomizerEdit('${branch.branch_id}', ${twig.id})">${currentVal}</textarea>
                    
                    <div style="display:flex; justify-content: flex-end; margin-top: 2px;">
                        ${isModified ? `<button class="btn btn-small" style="background:#4a2222; font-size:0.7rem; padding:4px 8px; border-color: transparent; color:#ffdddd;" onclick="resetCustomizerItem('${branch.branch_id}', ${twig.id})">${t('customizer_restore_default')}</button>` : ''}
                    </div>

                    <div class="schedule-config-box" style="margin-top: 8px; border-top: 1px dashed var(--border-color); padding-top: 8px; display: flex; flex-direction: column; gap: 6px; text-align: left;">
                        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                            <span style="font-size: 0.75rem; font-weight: bold; color: var(--text-muted);">${t('customizer_recurrence_label')}</span>
                            <select id="sched-type-${branch.branch_id}-${twig.id}" class="custom-select" style="background: var(--input-bg); color:var(--text-main); border:1px solid var(--border-color); padding:4px 8px; border-radius:8px; font-size:0.8rem;" onchange="handleScheduleTypeChange('${category.category_code}', '${branch.branch_id}', ${twig.id})">
                                <option value="none" ${sched.recurrenceType === 'none' ? 'selected' : ''}>${t('rec_none')}</option>
                                <option value="daily" ${sched.recurrenceType === 'daily' ? 'selected' : ''}>${t('rec_daily')}</option>
                                <option value="everyXDays" ${sched.recurrenceType === 'everyXDays' ? 'selected' : ''}>${t('rec_every_x_days')}</option>
                                <option value="weekly" ${sched.recurrenceType === 'weekly' ? 'selected' : ''}>${t('rec_weekly')}</option>
                                <option value="monthly" ${sched.recurrenceType === 'monthly' ? 'selected' : ''}>${t('rec_monthly')}</option>
                            </select>
                            
                            <div id="sched-interval-container-${branch.branch_id}-${twig.id}" style="${intervalStyle}">
                                <span style="font-size: 0.75rem; color: var(--text-muted); margin-right: 4px;">X =</span>
                                <input type="number" id="sched-interval-${branch.branch_id}-${twig.id}" class="custom-input" style="width:50px; background: var(--input-bg); color:var(--text-main); border:1px solid var(--border-color); padding:4px 8px; border-radius:8px; font-size:0.8rem;" min="1" value="${sched.recurrenceInterval || 2}" onchange="handleScheduleIntervalChange('${category.category_code}', '${branch.branch_id}', ${twig.id})">
                            </div>
                        </div>
                        
                        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.7rem; color: var(--text-muted);">
                            <span>${t('customizer_last_completed')}<strong style="color:var(--text-main);">${lastCompText}</strong>${t('customizer_next_due')}<strong style="color:var(--accent-warning);">${nextDueText}</strong></span>
                            ${sched.recurrenceType !== "none" ? `<button class="btn btn-small" style="background:transparent; color:#ef4444; font-size:0.65rem; padding:2px 6px; border: 1px solid #ef4444;" onclick="handleResetSchedule('${category.category_code}', '${branch.branch_id}', ${twig.id})">${t('reset_btn')}</button>` : ''}
                        </div>
                    </div>
                </div>
            `;
        });

        accordionsHtml += `
                </div>
            </div>
        `;
    });
    accordionsHtml += `</div>`;

    appContainer.innerHTML = `
        <div class="view-layout" style="padding-bottom: 24px;">
            <div class="meta-group meta-group-relative" style="text-align: left;">
                <span class="progress-text">${t('customizer_meta')}</span>
                <h2>${t('customizer_heading')}</h2>
                <button class="help-trigger-btn" onclick="handleHelpClick('task_schedule')" aria-label="Help">?</button>
            </div>
            
            <div style="background: var(--panel-bg); border: 1px solid var(--border-color); border-radius: 16px; padding: 16px; font-size: 0.85rem; line-height: 1.4; text-align: left; color: var(--text-muted);">
                <strong style="color: var(--text-main); display: block; margin-bottom: 6px;">${t('customizer_how_to_use_title')}</strong>
                <ol style="margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 6px;">
                    <li>${t('customizer_how_to_use_1')}</li>
                    <li>${t('customizer_how_to_use_2')}</li>
                    <li>${t('customizer_how_to_use_3')}</li>
                    <li>${t('customizer_how_to_use_4')}</li>
                </ol>
            </div>
            
            ${categoryTabsHtml}
            ${categoryRenameHtml}
            ${accordionsHtml}

            <hr style="border:0; border-top:1px solid var(--border-color); margin: 4px 0;">

            <div class="button-stack">
                <button class="btn btn-primary" onclick="switchTab('PLANNER')">${t('customizer_save_close_editor')}</button>
                <button class="btn" style="color:var(--accent-warning); font-size:0.85rem;" onclick="clearAllData()">${t('customizer_wipe_all')}</button>
            </div>
        </div>
    `;
}

function saveCategoryNameOverride(catCode) {
    const input = document.getElementById('custom-cat-input');
    if (input && input.value.trim()) {
        saveCategoryOverride(catCode, input.value);
        renderCustomizerView(customizerActiveCategoryId);
    }
}

function resetCategoryNameOverride(catCode) {
    deleteCategoryOverride(catCode);
    renderCustomizerView(customizerActiveCategoryId);
}

function saveBranchNameOverride(branchId) {
    const input = document.getElementById(`custom-branch-input-${branchId}`);
    if (input && input.value.trim()) {
        saveBranchOverride(branchId, input.value);
        renderCustomizerView(customizerActiveCategoryId);
    }
}

function resetBranchNameOverride(branchId) {
    deleteBranchOverride(branchId);
    renderCustomizerView(customizerActiveCategoryId);
}

function toggleCustomizerBranch(branchId) {
    customizerOpenBranchId = (customizerOpenBranchId === branchId) ? null : branchId;
    renderCustomizerView(customizerActiveCategoryId);
}

function saveCustomizerEdit(branchId, twigId) {
    const textInput = document.getElementById(`customizer-textarea-${branchId}-${twigId}`);
    if (textInput && textInput.value.trim()) {
        saveOverride(branchId, twigId, textInput.value);
    }
}

function resetCustomizerItem(branchId, twigId) {
    deleteOverride(branchId, twigId);
    renderCustomizerView(customizerActiveCategoryId);
}

/**
 * METRICS DASHBOARD
 */
function renderDashboardView() {
    switchTab("STATUS");
}

function clearAllData() {
    if (confirm(t('confirm_clear_all'))) {
        USER_OVERRIDES = { _categories: {}, _branches: {} };
        localStorage.removeItem('task_exploder_overrides');
        resetAllSchedules();
        renderCustomizerView(customizerActiveCategoryId);
    }
}

/**
 * SCHEDULING UI EVENT HANDLERS
 */
function handleScheduleTypeChange(catCode, branchId, twigId) {
    const taskId = `${catCode}:${branchId}:${twigId}`;
    const selectEl = document.getElementById(`sched-type-${branchId}-${twigId}`);
    const type = selectEl.value;
    
    const currentSched = getTaskSchedule(taskId);
    currentSched.recurrenceType = type;
    
    const container = document.getElementById(`sched-interval-container-${branchId}-${twigId}`);
    if (type === "everyXDays") {
        container.style.display = "inline-block";
        const intInput = document.getElementById(`sched-interval-${branchId}-${twigId}`);
        currentSched.recurrenceInterval = parseInt(intInput.value, 10) || 2;
    } else {
        container.style.display = "none";
        currentSched.recurrenceInterval = null;
    }
    
    if (type !== "none" && !currentSched.nextDueDate) {
        currentSched.nextDueDate = getLocalDateString();
    } else if (type === "none") {
        currentSched.nextDueDate = null;
    } else {
        const baseDate = currentSched.lastCompletedDate || getLocalDateString();
        currentSched.nextDueDate = calculateNextDueDate(currentSched, baseDate);
    }
    
    setTaskSchedule(taskId, currentSched);
    renderCustomizerView(customizerActiveCategoryId);
}

function handleScheduleIntervalChange(catCode, branchId, twigId) {
    const taskId = `${catCode}:${branchId}:${twigId}`;
    const intInput = document.getElementById(`sched-interval-${branchId}-${twigId}`);
    const interval = parseInt(intInput.value, 10) || 2;
    
    const currentSched = getTaskSchedule(taskId);
    currentSched.recurrenceInterval = interval;
    
    if (currentSched.recurrenceType === "everyXDays") {
        const baseDate = currentSched.lastCompletedDate || getLocalDateString();
        currentSched.nextDueDate = calculateNextDueDate(currentSched, baseDate);
    }
    
    setTaskSchedule(taskId, currentSched);
    renderCustomizerView(customizerActiveCategoryId);
}

function handleResetSchedule(catCode, branchId, twigId) {
    const taskId = `${catCode}:${branchId}:${twigId}`;
    deleteTaskSchedule(taskId);
    renderCustomizerView(customizerActiveCategoryId);
}

function handleCompleteDueTask(taskId) {
    const todayStr = getLocalDateString();
    const sched = getTaskSchedule(taskId);
    if (!sched) return;
    
    const updated = updateCompletion(taskId, sched, todayStr);
    setTaskSchedule(taskId, updated);
    
    EXPLODER_REWARDS.momentumPoints++;
    EXPLODER_REWARDS.lifetimeWins++;
    updateDateAndStreakOnCompletion();

    const parts = taskId.split(':');
    const catCode = parts[0];
    const branchId = parts[1];
    const twigId = parseInt(parts[2], 10);
    
    if (catCode !== "random" && !EXPLODER_REWARDS.completedTwigs.includes(taskId)) {
        EXPLODER_REWARDS.completedTwigs.push(taskId);
    }

    const catObj = TASK_DATA.categories.find(c => c.category_code === catCode);
    const branchObj = catObj ? catObj.branches.find(b => b.branch_id === branchId) : null;
    const catName = catObj ? getCategoryName(catObj) : "Category";
    const branchName = branchObj ? getBranchName(branchObj) : "Branch";
    const twigObj = branchObj ? branchObj.twigs.find(t => t.id === twigId) : null;
    const text = twigObj ? getTwigText(branchId, twigObj) : "Scheduled Task";

    const ledgerEntry = {
        timestamp: new Date().toISOString(),
        twigId: twigId,
        categoryCode: catCode,
        branchId: branchId,
        categoryName: catName,
        branchName: branchName,
        text: text
    };
    EXPLODER_REWARDS.winsLedger.unshift(ledgerEntry);
    if (EXPLODER_REWARDS.winsLedger.length > 50) {
        EXPLODER_REWARDS.winsLedger.pop();
    }

    recalculateRoomAuras();
    checkLifetimeBadges();
    saveRewards();

    showEncouragementToast();
    renderPlannerTabView();
}

/**
 * SYSTEM CONFIGURATION OVERLAY (SETTINGS VIEW)
 */
function openSettingsView() {
    savedStateBeforeSettings = {
        appState,
        currentCategory,
        currentBranch,
        currentTwigIdx,
        customizerActiveCategoryId,
        customizerOpenBranchId
    };
    appState = "SETTINGS";
    renderSettingsView();
}

function closeSettingsView() {
    if (savedStateBeforeSettings) {
        appState = savedStateBeforeSettings.appState;
        currentCategory = savedStateBeforeSettings.currentCategory;
        currentBranch = savedStateBeforeSettings.currentBranch;
        currentTwigIdx = savedStateBeforeSettings.currentTwigIdx;
        customizerActiveCategoryId = savedStateBeforeSettings.customizerActiveCategoryId;
        customizerOpenBranchId = savedStateBeforeSettings.customizerOpenBranchId;
        savedStateBeforeSettings = null;
    } else {
        appState = "ENERGY_SELECT";
    }
    switchTab("STATUS");
}

function setLanguage(lang) {
    localStorage.setItem('task_exploder_language', lang);
    location.reload();
}

function renderSettingsView() {
    const isLight = document.documentElement.classList.contains('light-theme');
    const currentLanguage = localStorage.getItem('task_exploder_language') || 'en';
    
    appContainer.innerHTML = `
        <div class="view-layout" style="text-align: left;">
            <div class="meta-group meta-group-relative">
                <span class="progress-text" style="color: var(--accent-warning);">${t('settings_meta')}</span>
                <h2>${t('settings_heading')}</h2>
                <button class="help-trigger-btn" onclick="handleHelpClick('settings')" aria-label="Help">?</button>
            </div>

            <div style="background: var(--panel-bg); border: 1px solid var(--border-color); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 16px;">
                <!-- Theme Mode -->
                <div>
                    <span style="font-size: 0.85rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 8px;">${t('settings_theme_mode')}</span>
                    <button class="btn theme-toggle-btn" style="background: var(--btn-default-bg); border: 1px solid var(--border-color); font-size: 0.9rem; padding: 12px; font-weight: 600; width: 100%; display: flex; justify-content: center; align-items: center; gap: 8px;" onclick="toggleThemeInSettings()">
                        ${isLight ? t('settings_theme_night') : t('settings_theme_day')}
                    </button>
                </div>

                <hr style="border:0; border-top:1px solid var(--border-color); margin: 8px 0;">

                <!-- Language Mode -->
                <div>
                    <span style="font-size: 0.85rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 8px;">${t('settings_language_label')}</span>
                    <div style="display: flex; gap: 10px;">
                        <button class="btn language-toggle-btn ${currentLanguage === 'en' ? 'active' : ''}" style="flex: 1;" onclick="setLanguage('en')">🇬🇧 English</button>
                        <button class="btn language-toggle-btn ${currentLanguage === 'fr' ? 'active' : ''}" style="flex: 1;" onclick="setLanguage('fr')">🇫🇷 Français</button>
                    </div>
                </div>

                <hr style="border:0; border-top:1px solid var(--border-color); margin: 8px 0;">

                <div class="settings-help-section">
                    <span class="settings-help-title">${t('settings_help_label')}</span>
                    <button class="btn btn-small help-replay-btn" onclick="replayIntroduction()">${t('settings_help_replay')}</button>
                </div>

                <hr style="border:0; border-top:1px solid var(--border-color); margin: 8px 0;">

                <div>
                    <span style="font-size: 0.85rem; font-weight: bold; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 8px;">${t('settings_backup_label')}</span>
                    <div style="display: flex; gap: 10px; margin-bottom: 8px;">
                        <button class="btn btn-small" style="flex: 1; background: var(--accent-primary); color: #fff;" onclick="exportBackupData()">${t('settings_backup_export')}</button>
                        <button class="btn btn-small" style="flex: 1; background: var(--btn-default-bg);" onclick="triggerImportFileInput()">${t('settings_backup_import')}</button>
                    </div>
                    <div id="import-warning-msg">
                        ${importWarningText ? `<div class="scratchpad-warning-inline" style="margin-bottom: 8px;">⚠️ ${importWarningText}</div>` : ''}
                    </div>
                    <input type="file" id="import-file-input" style="display: none;" onchange="importBackupData(event)" accept=".json">
                    <p style="font-size: 0.75rem; color: var(--text-muted); line-height: 1.4; margin-bottom: 12px;">${t('settings_backup_desc')}</p>
                </div>

                <hr style="border:0; border-top:1px solid var(--border-color); margin: 8px 0;">

                <div>
                    <span style="font-size: 0.85rem; font-weight: bold; color: #f87171; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 4px;">${t('settings_destructive_label')}</span>
                    <p style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 12px; line-height: 1.45;">${t('settings_destructive_desc')}</p>
                    
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <button class="btn" style="background: var(--danger-btn-bg); color: var(--danger-btn-color); border: 1px solid var(--danger-border); padding: 12px; font-weight: bold; font-size: 0.85rem;" onclick="resetPerformanceStatsInSettings()">
                            ${t('settings_reset_stats_btn')}
                        </button>
                        <button class="btn" style="background: #ef4444; color: #121214; font-weight: bold; border-color: transparent; padding: 12px; font-size: 0.85rem;" onclick="triggerGlobalHardResetInSettings()">
                            ${t('settings_reset_all_btn')}
                        </button>
                    </div>
                </div>

                <hr style="border:0; border-top:1px solid var(--border-color); margin: 8px 0;">

                <div style="text-align: center; padding: 8px 0;">
                    <p style="font-size: 0.85rem; font-weight: 700; color: var(--text-main); margin-bottom: 4px;">Task Exploder v1.0</p>
                    <p style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 4px;">© 2026 Screwloose Labs</p>
                    <p style="font-size: 0.75rem; color: var(--text-muted);">screwlooselabs@gmail.com</p>
                </div>

            </div>

            <div class="button-stack" style="margin-top: 12px;">
                <button class="btn btn-primary" onclick="closeSettingsView()">${t('settings_close_btn')}</button>
            </div>
        </div>
    `;
}

function toggleThemeInSettings() {
    toggleTheme();
    renderSettingsView();
}

function resetPerformanceStatsInSettings() {
    resetPerformanceStats();
    renderSettingsView();
}

function triggerGlobalHardResetInSettings() {
    triggerGlobalHardReset();
}

function showImportWarning(msg) {
    importWarningText = msg;
    if (appState === "SETTINGS") {
        renderSettingsView();
    }
    if (importWarningTimeout) clearTimeout(importWarningTimeout);
    importWarningTimeout = setTimeout(() => {
        importWarningText = "";
        if (appState === "SETTINGS") {
            renderSettingsView();
        }
    }, 3000);
}

function exportBackupData() {
    const keys = ['task_exploder_rewards', 'task_exploder_schedules', 'task_exploder_scratchpad', 'task_exploder_overrides', 'task_exploder_theme', 'task_exploder_language'];
    const backup = {};
    keys.forEach(key => {
        const val = localStorage.getItem(key);
        if (val !== null) {
            backup[key] = val;
        }
    });
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'taskexploder-backup.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function triggerImportFileInput() {
    const input = document.getElementById('import-file-input');
    if (input) input.click();
}

function importBackupData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const parsed = JSON.parse(e.target.result);
            const keys = ['task_exploder_rewards', 'task_exploder_schedules', 'task_exploder_scratchpad', 'task_exploder_overrides', 'task_exploder_theme', 'task_exploder_language'];
            keys.forEach(key => {
                if (parsed[key] !== undefined) {
                    localStorage.setItem(key, parsed[key]);
                }
            });
            window.location.reload();
        } catch (err) {
            showImportWarning(t('settings_import_error'));
        }
    };
    reader.readAsText(file);
}

/**
 * DESTRUCTIVE STORAGE MAINTENANCE ACTIONS
 */
function resetPerformanceStats() {
    if (confirm(t('confirm_reset_stats'))) {
        EXPLODER_REWARDS = {
            momentumPoints: 0,
            momentumBank: 0,
            badges: [],
            roomAura: {
                kitchen: 0, bathroom: 0, living_room: 0, bedroom: 0, laundry: 0, 
                digital_life: 0, life_admin: 0, work_productivity: 0, morning_routine: 0, evening_routine: 0
            },
            winsLedger: [],
            lifetimeWins: 0,
            completedTwigs: [],
            firstUseDate: null,
            lastUseDate: null,
            activeDaysCount: 0,
            currentConsecutive: 0
        };
        saveRewards();
        recalculateRoomAuras();
    }
}

function triggerGlobalHardReset() {
    if (confirm(t('confirm_factory_reset'))) {
        localStorage.removeItem('task_exploder_overrides');
        localStorage.removeItem('task_exploder_rewards');
        localStorage.removeItem('task_exploder_schedules');
        localStorage.removeItem('task_exploder_scratchpad');
        localStorage.removeItem('task_exploder_first_run');
        localStorage.removeItem('task_exploder_language');
        window.location.reload();
    }
}

document.addEventListener('DOMContentLoaded', initApp);