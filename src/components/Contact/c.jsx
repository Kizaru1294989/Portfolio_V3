import { useState } from "react"
import { motion } from "framer-motion"

const inputStyle =
  "w-full p-3 bg-white text-gray-800 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
const labelStyle = "block text-sm font-medium text-gray-200 mb-2"

export default function ContactComponent() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    // Ici, vous pouvez ajouter la logique pour envoyer les données du formulaire
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1f1f1f]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-gray-900 rounded-xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Contactez-nous</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <label htmlFor="firstName" className={labelStyle}>
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
              required
              className={inputStyle}
              placeholder="Votre prénom"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <label htmlFor="lastName" className={labelStyle}>
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formState.lastName}
              onChange={handleChange}
              required
              className={inputStyle}
              placeholder="Votre nom"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <label htmlFor="email" className={labelStyle}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className={inputStyle}
              placeholder="votre@email.com"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <label htmlFor="message" className={labelStyle}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              className={`${inputStyle} min-h-[120px] resize-none`}
              placeholder="Votre message ici..."
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full p-3 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition-colors duration-300"
          >
            Envoyer
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}

