# Database Design
- 


## User Requirements
- Each Person could have 1-7 individualised WorkoutRoutines, depending on the day. (Perhaps even more -> AM workouts / PM workouts)
- Each WorkoutRoutine has an individual set of Exercises, with some crossover e.g. someone could do Bench Press on Monday and on Friday afterall.
- Each Exercise has a number of Sets
- Each Set has a number of Reps

## Design Concept
### 1. People / Users
Could also add things like weight, height, age (or birth date) and more to calculate things like BMI, ideal weight, etc.
Each person has multiple **Routines**
```
User: {
    id: string,
    name: string,
    email: string,
    password: string,
    salt: string,
    is_deleted: boolean,
    Routines,
}
```
### 2. Exercises
An **Exercise** is the activitie itself. 
This table does not have wheight, reps, etc.
Could add muscle target, equipment, dificulty
```
Exercise: {
    id: string,
    name: string,
    desc: string,
    img: string,
    type: string,
}
```
### 3. Workouts
A workout is the act of doing an **Exercise**.
Each **Workout** has one **Exercise**. Reps and Weight are arrays because you could have sets with different amount of reps and multiple wheights, for example, 4 sets of 12, 10, 8 and 6 reps with 40, 45, 50 and 55 kg. The amount of sets is calculated by reps.length.
Could add ORM or One Repetition Maximum (Basically is your personal record, but you have to do a maximum of 1 repetition).
```
Workout: {
    id: string
    Exercise: {
        id: string
    }
    reps: array (optional),
    weight: array (optional),
    duration: number (optional),
    distance: number (optional),
}
```
### 4. Routines
A routine has multiple workouts and one or multiple week days.
```
Routine: {
    id: string,
    name: string,
    desc: string,
    week_day: array,
    Workouts: Object,
}
```
