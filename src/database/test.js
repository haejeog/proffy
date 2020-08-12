const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async (db) => {
    proffyValue = {
        name: "Mayk Brito",
        avatar: "https://xesque.rocketseat.dev/users/avatar/profile-0774519a-0db3-4b90-bd63-1fb87921f221-1597006406877.jpg?1597006407302",
        whatsapp: "71996847688",
        bio: "Programador Java FullStack"
    }
    classValue = {
        subject: 2,
        cost: "200,00"

    }
    classScheduleValues = [
        {
            weekday: 3,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 720
        }
    ]
   // await createProffy(db, { proffyValue, classValue, classScheduleValues });
    const selectedProffys = await db.all("SELECT * FROM proffys");
    //console.log(selectedProffys);

    const selecterClassesAndProffys = await db.all(`
            SELECT classes.*, proffys.*
            FROM proffys
            JOIN classes ON (classes.proffy_id = proffys.id)
            WHERE classes.proffy_id = 1;
    `);
    //console.log(selecterClassesAndProffys);
    const selectClassesSchedules = await db.all(`
    SELECT classes.*, proffys.*
            FROM proffys
            JOIN classes ON (classes.proffy_id = proffys.id)
            WHERE EXISTS(
                SELECT class_schedule.*
                FROM class_schedule
                WHERE class_schedule.class_id=classes.id
                AND class_schedule.weekday='3'
                AND class_schedule.time_from <= '720'
                AND class_schedule.time_to > '720' 
            )
            AND classes.subject = '2';
    
    `);
    console.log(selectClassesSchedules);
});