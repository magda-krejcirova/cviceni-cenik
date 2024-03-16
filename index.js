const selectPlan = (planNumber) => {
    
    //odstraneni class pokud je aktivni u #plan[i] slo by nahradit jen vymaz.classList.remove("plan1")
    for (let i=1; i<4; i++) {
        let vymaz = document.querySelector(`#plan${i}`)
        console.log(vymaz.classList[1])
            if (vymaz.classList[1] === "plan--selected") 
            {vymaz.classList.remove("plan--selected")}
        }
    
    let nastav = document.querySelector(`#plan${planNumber}`)
    nastav.classList.add("plan--selected")
}
    
const program = prompt("Vyber si z nabidky: 1 - zakladni, 2 - Rozsireny, 3 - Mega ")
selectPlan(program)