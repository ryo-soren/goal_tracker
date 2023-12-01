export const getSuccessRateByType = (goals, type) => {
    let successful = 0
    let successfulAndUnsuccessful = 0
    goals.filter(g => g.frequency === type).forEach(g => {
        successful += g.successful
        successfulAndUnsuccessful += g.successful + g.unsuccessful
    })
    const percent =  (successful/successfulAndUnsuccessful * 100).toFixed(0)
    console.log(percent);
    return percent === "NaN" ?  0 : percent
}