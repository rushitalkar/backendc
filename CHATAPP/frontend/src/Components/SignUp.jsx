
import { Mail, MessageSquare, User , Lock, EyeOff , Eye, Loader2} from 'lucide-react'
import { useAuthStore } from '../store/store'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthImagePattern from '../additional/AuthImagePattern'
import toast from 'react-hot-toast'



const SignUp = () => {
 const { signUp, isSigningup } = useAuthStore()
  let [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  })

  const validateForm = () => {
       if (!formData.fullname.trim()) {
          return toast.error("Fullname is Require")

       }
       if(!formData.email.trim()){
        return toast.error("Email is Require")
       }

       if (!/\S+@\S+\.\S+/.test(formData.email)) {
         return toast.error("Invalid Email")
       }

       if (!formData.password) {
        return toast.error("Password is Require")
        
       }
       if (formData.password.length < 6) {
        return toast.error("Password must be at least 6 characters")
        
       }

       return true
  }



  const handleSubmit = (e) => {
    e.preventDefault()

    const success = validateForm()

    if (success === true) {
      signUp(formData)
    }
  }


  return (
    <div className='min-h-screen grid lg:grid-cols-2'>

      <div className='flex flex-col justify-center items-center p-6 sm:p-12'>

        <div className='w-full  max-w-md space-y-8'>
          <div className='text-center mb-8'>
            <div className='flex flex-col items-center gap-2 group' style={{position: "relative" , top: "25px"}}>
              <div className='size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                <MessageSquare className='size-6 text-primary items-center' />
              </div>
              <h1 className='text-2xl font-bold mt-2'>Create Account</h1>
              <p className='text-base-content/60'> Get Started Your Free Account</p>

            </div>
          </div>



          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text  font-medium'> Full Name</span>
              </label>
              <div className='relative'>
                <div className='absolute insert-y-0 left-0 pl-3 flex items-center pointer-events-none top-2'>
                  <User className='size-5 text-base-content/40 z-1' />
                </div>
                <input type="text"
                  className={`input input-boardered w-full pl-10`}
                  placeholder='Rushii'
                  value={formData.fullname}
                  onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                />
              </div>
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text  font-medium'> Email</span>
              </label>
              <div className='relative'>
                <div className='absolute insert-y-0 left-0 pl-3 flex items-center pointer-events-none top-2'>
                  <Mail className='size-5 text-base-content/40 z-1' />
                </div>
                <input type="email"
                  className={`input input-boardered w-full pl-10`}
                  placeholder='Rushii'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text  font-medium'>Password</span>
              </label>
              <div className='relative'>
                <div className='absolute insert-y-0 left-0 pl-3 flex items-center pointer-events-none top-2'>
                  <Lock className='size-5 text-base-content/40 z-1' />
                </div>
                <input type={showPassword ? "text" : "password"}
                  className={`input input-boardered w-full pl-10`}
                  placeholder='password'
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                type='button'
                className='absolute inset-y-0 right-0 
                
                
                pr-3 flex items-center'
                onClick={() => setShowPassword(!showPassword)}
                >
                {
                  showPassword ? (
                      <EyeOff className='size-5 text-base-content/40'/>
                  ) : (
                     <Eye className='size-5 text-base-content/40'/>
                  )

                }

                </button>

              </div>
            </div>

            <button type='submit'
            className='btn btn-primary w-full'
            disabled={isSigningup}
            >
            {
              isSigningup ? (
                <>
                <Loader2 className='animate-spin size-5' />
                Loading.....</>
               ) : (
                 "Create Account"
               )
             
            }


            </button>

          </form>

          <div className='text-center'>
             <p className='text-base-content/60'>
              Already have An Account ?{""}
              <Link to="/login" className='link link-primary'>Sign In</Link>
             </p>
          </div>
        </div>
      </div>

    <AuthImagePattern
    title ="Join Our Community"
    subtitle="Create Your Free Account"
/>

    </div>
  )
}

export default SignUp
