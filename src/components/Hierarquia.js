import FirstComponent from "./FirstComponent"
import TemplateExpressions from "./TemplateExpressions"

const PrincipalComponent = () => {
    //Um component chamando outros, este é o component pai e os que ele chama, os components filhos
    
    return (
        <>
            <FirstComponent />
            <TemplateExpressions />
        </>
    )
}

export default PrincipalComponent   