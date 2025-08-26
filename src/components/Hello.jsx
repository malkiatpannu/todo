export default function Hello({ name = 'World' }) {
    return <h1 className="text-3xl font-bold underline">Hello  
        <span className="greet" style={{ marginLeft: 10 }}>{name}</span>
    </h1>
}