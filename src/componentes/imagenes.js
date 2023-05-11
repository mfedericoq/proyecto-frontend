export default function Agregarimg (props) {
   return (

    <div className="m-3 p-3 flex-none">
           <img className="rounded-md hover:scale-125 hover:duration-300 hover:delay-700" 
           src={props.src} height={props.height}
               width={props.width} alt="error de imagen"></img>
    </div>

   )
}