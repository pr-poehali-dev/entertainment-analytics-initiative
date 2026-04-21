import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import AnimatedButton from "./AnimatedButton"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
      <motion.nav
        className="relative bg-gray-900/60 backdrop-blur-md border rounded-2xl shadow-lg overflow-hidden"
        animate={{
          borderColor: [
            "rgba(233, 30, 140, 0.4)",
            "rgba(124, 58, 237, 0.4)",
            "rgba(244, 114, 182, 0.4)",
            "rgba(167, 139, 250, 0.4)",
            "rgba(233, 30, 140, 0.4)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: [
              "0 0 20px rgba(233, 30, 140, 0.3)",
              "0 0 20px rgba(124, 58, 237, 0.3)",
              "0 0 20px rgba(244, 114, 182, 0.3)",
              "0 0 20px rgba(167, 139, 250, 0.3)",
              "0 0 20px rgba(233, 30, 140, 0.3)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative z-10 px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-3">
                <span className="text-xl font-bold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                  PinkiPay
                </span>
              </a>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#services" className="text-sm text-gray-300 hover:text-pink-400 transition-colors">
                  Продукты
                </a>
                <a href="#artists" className="text-sm text-gray-300 hover:text-fuchsia-400 transition-colors">
                  Клиентам
                </a>
                <a href="#success-stories" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
                  О банке
                </a>
                <a href="#contact" className="text-sm text-gray-300 hover:text-pink-300 transition-colors">
                  Контакты
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-sm text-gray-300 hover:text-white">
                Войти
              </Button>
              <a href="#get-started">
                <AnimatedButton size="sm" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700">
                  Открыть счёт
                </AnimatedButton>
              </a>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5 text-gray-300" /> : <Menu className="h-5 w-5 text-gray-300" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700/50 bg-gray-900/80 backdrop-blur-md rounded-b-2xl">
            <div className="px-6 py-4 space-y-3">
              <a href="#services" className="block text-gray-300 hover:text-pink-400">
                Продукты
              </a>
              <a href="#artists" className="block text-gray-300 hover:text-fuchsia-400">
                Клиентам
              </a>
              <a href="#success-stories" className="block text-gray-300 hover:text-purple-400">
                О банке
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-pink-300">
                Контакты
              </a>
              <div className="pt-3 border-t border-gray-700">
                <a href="#get-started" className="block">
                  <AnimatedButton className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700">Открыть счёт</AnimatedButton>
                </a>
              </div>
            </div>
          </div>
        )}
      </motion.nav>
    </header>
  )
}