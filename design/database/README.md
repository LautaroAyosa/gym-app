# Database Design

## User Requirements
- Each Person could have multiple Routines, depending on the day.
- Each Person could use one routine multiple days.
- Each Routine has multiple Workouts.
- Each Workout has multiple sets of reps.
- Each Workout has multiple weights. 
- Each Workout has one Exercise.
- 

## Design Concept
### 1. People / Users
Could also add things like weight, height, age (or birth date) and more to calculate things like BMI, ideal weight, etc.
Each person has multiple **Routines**
```
User: {
    userName: String *Required*,
    firstName: String,
    lastName: String,
    email: String *Required*,
    password: String *Required*,
    is_deleted: boolean,
    Routines: ObjectId,
}
```
### 2. Exercises
An **Exercise** is the activitie itself. 
This table does not have wheight, reps, etc.
Could add muscle target, equipment, dificulty
```
Exercise: {
    name: String,
    desc: String,
    img: String,
    body_part: String,
    type: String,
}
```
### 3. Workouts
A workout is the act of doing an **Exercise**.
Each **Workout** has one **Exercise**. Reps and Weight are arrays because you could have sets with different amount of reps and multiple wheights, for example, 4 sets of 12, 10, 8 and 6 reps with 40, 45, 50 and 55 kg. The amount of sets is calculated by reps.length.
Could add ORM or One Repetition Maximum (Basically is your personal record, but you have to do a maximum of 1 repetition).
```
Workout: {
    Exercise: ObjectId *Required*
    reps: Array,
    weight: Array,
    duration: Number,
    distance: Number,
}
```
### 4. Routines
A routine has multiple workouts and one or multiple week days.
```
Routine: {
    name: String,
    desc: String,
    week_day: Array,
    Workouts
}
```
