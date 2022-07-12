import {useForm} from 'react-hook-form'


const Formulario = () => {

    const {register,formState: {errors}, watch , handleSubmit} = useForm()

    const onSubmit = (data)=>{
        console.log(data)

    }
    
    const ofertas = watch('incluirOfertas') 

    return <div>
    
        <h2>Formulario</h2>
        <p>Nombre: {watch('nombre')}</p>
        <p>Apellido: {watch('apellido')}</p>
        <p>Direccion: {watch('direccion')}</p>
        <p>Correo: {watch('correo')}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
            <label>Nombre</label>
            <input type="text" {...register('nombre',{
                required: true,
                maxLength: 30
            })}/>
            {errors.nombre?.type === 'required' && <p>Campo requerido</p>}
            {errors.nombre?.type === 'maxLength' && <p>Campo nombre debe tener 30 caracteres como
            maximo</p>}
            </div>
            <div>
            <label>Apellido</label>
            <input type="text" {...register('apellido',{
                required: true,
                maxLength: 100
            })}/>
            {errors.nombre?.type === 'required' && <p>Campo requerido</p>}
            {errors.nombre?.type === 'maxLength' && <p>Campo Apellido debe tener 100 caracteres como
            maximo</p>}
            </div>
            <div>
            <label>Direccion</label>
            <input type="text" {...register('direccion')}/>
            </div>
            <div>
            <label>Correo</label>
            <input type="text"{...register('correo',{
                pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i
            })} />
            {errors.correo?.type === 'pattern' && <p>El formato del correo es incorrecto</p>}
            </div>
            <div>
                <label>Desea Recibir ofertas</label>
                <input type="checkbox" {...register('incluirOfertas')}/>
            </div>
            {ofertas && (
                <div>Se enviaran ofertas</div>
            )}
            <imput type="submit" value ="Enviar"/>
        </form>

    </div>
    

}

export default Formulario