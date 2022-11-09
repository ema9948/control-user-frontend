import toast from 'react-hot-toast';

const UseResetPasssword = () => {

    const resetPassword = (data) => {
        const uri = "https://controll-emplyeds.vercel.app/api/v1/user"
        try {

            const res = fetch(`${uri}/fargotpassword`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer`, // notice the Bearer before your token
                },
                body: JSON.stringify(data)

            })
                .then(res => {
                    if (res?.status === 200) return toast.success("Exito al cambiar credenciales.")
                    if (res?.status !== 200) return toast.error("Error usuario el no existe.")
                })
        } catch (error) {
            console.log(error)
        }
    }
    return { resetPassword }
}

export default UseResetPasssword