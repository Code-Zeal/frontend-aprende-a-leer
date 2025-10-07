
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function LoginStudent() {
  const [showRegister, setShowRegister] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [age, setAge] = useState(undefined)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      })

      localStorage.setItem("user", JSON.stringify(response.data))
      console.log("Login successful:", response.data)
      navigate("/inicio")
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Error al iniciar sesión"
      console.log("Login error:", errorMessage);
      
      // If email doesn't exist, show registration form
      if (
        errorMessage.toLowerCase().includes("no existe") ||
        errorMessage.toLowerCase().includes("not found") ||
        err.response?.status === 404
      ) {
        setShowRegister(true)
        setError("¡No encontramos tu cuenta! Vamos a crear una nueva para ti.")
      } else {
        setError(errorMessage)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setError("")

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden")
      return
    }

    setLoading(true)

    try {
      const response = await axios.post("https://aprende-a-leer.fly.dev/auth/register", {
        name,
        email,
        password,
        age
      })

      localStorage.setItem("user", JSON.stringify(response.data))
      console.log("Registration successful:", response.data)
      navigate("/inicio")
    } catch (err) {
      setError(err.response?.data?.message || "Error al registrarse")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-16 h-16 bg-yellow-300 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-12 h-12 bg-pink-300 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-purple-300 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-14 h-14 bg-blue-300 rounded-full opacity-60 animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
        ></div>

        {/* Stars */}
        <div
          className="absolute top-1/4 right-1/4 text-yellow-400 text-4xl animate-pulse"
          style={{ animationDuration: "2s" }}
        >
          ✨
        </div>
        <div
          className="absolute bottom-1/3 left-1/3 text-yellow-400 text-3xl animate-pulse"
          style={{ animationDuration: "3s" }}
        >
          ⭐
        </div>
        <div
          className="absolute top-1/3 left-1/4 text-pink-400 text-3xl animate-pulse"
          style={{ animationDuration: "2.5s" }}
        >
          ✨
        </div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-[2rem] shadow-2xl p-8 border-4 border-white">
          {/* Header with magical theme */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4 mb-4 shadow-lg">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Lecturas Mágicas
            </h1>
            <p className="text-lg text-purple-600 font-semibold">
              {showRegister ? "¡Crea tu cuenta mágica!" : "¡Bienvenido, pequeño lector!"}
            </p>
          </div>

          {/* Error message */}
          {error && (
            <div
              className={`mb-6 p-4 ${showRegister && error.includes("No encontramos") ? "bg-blue-100 border-blue-300" : "bg-red-100 border-red-300"} border-2 rounded-2xl flex items-start gap-3`}
            >
              <span className="text-2xl">{showRegister && error.includes("No encontramos") ? "🎉" : "😢"}</span>
              <p
                className={`${showRegister && error.includes("No encontramos") ? "text-blue-700" : "text-red-700"} font-medium flex-1`}
              >
                {error}
              </p>
            </div>
          )}

          {!showRegister ? (
            // Login form
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-lg font-bold text-purple-700 mb-2">
                  Tu correo electrónico
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-14 pr-4 py-4 text-lg border-3 border-purple-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-500 transition-all bg-purple-50/50"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-lg font-bold text-purple-700 mb-2">
                  Tu contraseña secreta
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-14 pr-4 py-4 text-lg border-3 border-purple-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-500 transition-all bg-purple-50/50"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 text-xl font-bold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Entrando...</span>
                  </>
                ) : (
                  <>
                    <span>¡Entrar a leer!</span>
                    <span className="text-2xl">📚</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-bold text-purple-700 mb-2">
                  ¿Cómo te llamas?
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full pl-14 pr-4 py-4 text-lg border-3 border-purple-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-500 transition-all bg-purple-50/50"
                    placeholder="Tu nombre"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="register-email" className="block text-lg font-bold text-purple-700 mb-2">
                  Tu correo electrónico
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    id="register-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-14 pr-4 py-4 text-lg border-3 border-purple-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-500 transition-all bg-purple-50/50"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="register-password" className="block text-lg font-bold text-purple-700 mb-2">
                  Crea tu contraseña secreta
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    id="register-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    className="w-full pl-14 pr-4 py-4 text-lg border-3 border-purple-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-500 transition-all bg-purple-50/50"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-lg font-bold text-purple-700 mb-2">
                  Repite tu contraseña
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={3}
                    className="w-full pl-14 pr-4 py-4 text-lg border-3 border-purple-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-500 transition-all bg-purple-50/50"
                    placeholder="••••••••"
                  />
                </div>
              </div>


               <div>
                <label htmlFor="age" className="block text-lg font-bold text-purple-700 mb-2">
                  Edad
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
 
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                  <input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                    className="w-full pl-14 pr-4 py-4 text-lg border-3 border-purple-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-500 transition-all bg-purple-50/50"
                    placeholder=""
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 text-xl font-bold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Creando cuenta...</span>
                  </>
                ) : (
                  <>
                    <span>¡Crear mi cuenta!</span>
                    <span className="text-2xl">🎉</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowRegister(false)
                  setError("")
                  setName("")
                  setConfirmPassword("")
                }}
                className="w-full py-3 px-6 text-lg font-semibold text-purple-600 bg-purple-100 rounded-2xl hover:bg-purple-200 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300"
              >
                Ya tengo cuenta
              </button>
            </form>
          )}

          {/* Footer */}
          {!showRegister && (
            <div className="mt-8 text-center">
              <p className="text-purple-600 font-medium">
                ¿Olvidaste tu contraseña?
                <button className="ml-2 text-pink-600 font-bold hover:text-pink-700 underline">
                  Pide ayuda a tu maestro
                </button>
              </p>
            </div>
          )}
        </div>

        {/* Fun message below card */}
        <div className="mt-6 text-center">
          <p className="text-purple-700 font-bold text-lg drop-shadow-lg">✨ ¡Prepárate para aventuras mágicas! ✨</p>
        </div>
      </div>
    </div>
  )
}
