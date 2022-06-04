function solve(worker) {
    let waterNeeded = 0.1 * (worker.weight * worker.experience);
    if (worker.dizziness == true) {
        worker.levelOfHydrated += waterNeeded;
        worker.dizziness = false;
    }

    return worker;
}

solve({
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }
);

solve({
        weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true
    }
);

solve({
        weight: 95,
        experience: 3,
        levelOfHydrated: 0,
        dizziness: false
    }
);