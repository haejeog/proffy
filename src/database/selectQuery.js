function queryPageStudy(){
    return `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
    `
}

function queryPageStudyCreate(filters, timeToMinutes){
    
    return `
        SELECT classes.*, proffys.* 
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS(
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id 
            AND class_schedule.weekday = "${filters.weekday}"
            AND class_schedule.time_from <= "${timeToMinutes}"
            AND class_schedule.time_to > "${timeToMinutes}"
        )
        AND classes.subject = "${filters.subject}"
    `
}

module.exports = {
    queryPageStudy,
    queryPageStudyCreate
}