import style from './Botao.module.scss'

interface IBotao {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

export default function Botao (props: React.PropsWithChildren<IBotao>): React.JSX.Element{
    const {type = "button", onClick} = props
    return (
        <>
            <button onClick={onClick} type={type} className={style.botao}>{props.children}</button>
        </>
    )
}