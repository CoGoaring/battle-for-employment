let progress = document.getElementById("progress").value
async function handleScoring (e){
    e.preventDefault()
    let score=0
    const radios=document.querySelectorAll("input[type='radio']:checked")
    radios.forEach(radio=>{
        const{name,value}=radio
        console.log(name,value)
        if(name===value){score++}
    })
    if(score===radios.length){
        progress++
        const response=await fetch("/api/users",{method:"PUT",body:JSON.stringify({progress}),headers:{
            "Content-Type":"application/json"
        }})
        if(response.ok){
            document.location.reload()
        }//replace to winning page
    }else{alert("try again")

}

}

document.querySelector("form").addEventListener("submit",handleScoring)