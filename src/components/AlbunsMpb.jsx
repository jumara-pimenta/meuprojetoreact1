import albunsMpb from "../service/dados"

function AlbunsMpb() {
    return (
        <div>
            {albunsMpb.map(album =>{
                return(
                    <ul>
                    <li>{album.id}</li>
                    <li>{album.nome}</li>
                    <li><img src={album.capa} alt={album.nome}/></li>
                    </ul>
                )
            })}
        </div>
    )
}       

export default AlbunsMpb;