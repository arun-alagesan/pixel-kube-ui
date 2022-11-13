export default function Button({ children}: any, {onClick}: any) {
   return( 
    <button onClick={onClick} className="btn btn-primary w-full">
        {children}
    </button>
   )
}