// This file can handle complex registry sorting or filtering logic if the DATA grows.
// For now, the core logic resides in app.js for simplicity and performance.
export const RegistryHelper = {
    sortMilestones: (scores) => {
        return scores.sort((a, b) => b.score - a.score);
    }
};