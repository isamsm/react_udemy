const TemplateExpressions = () => {
    // Template expressions => Tudo dentro do {} em um jsx é executado como javascript
    
    const name = 'Isa';
    const data = {
        age: 21,
        job: 'desenvolvedora'
    }

    return (
        <>
            <p> Me chamo {name}, e trabalho como {data.job} </p>
            <p> 4 + 4 = {4 + 4} </p>
        </>
    )
}

export default TemplateExpressions