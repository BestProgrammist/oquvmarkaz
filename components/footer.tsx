// // components/footer.tsx
// "use client"

// import { motion } from 'framer-motion'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { 
//   Facebook, 
//   Instagram, 
//   Youtube, 
//   Twitter, 
//   Send, 
//   Phone, 
//   Mail, 
//   MapPin,
//   MessageSquare,
//   Users,
//   Globe,
//   Play
// } from 'lucide-react'

// const footerLinks = {
//   "Tezkor Havolalar": ['Bosh Sahifa', 'Kurslar', 'Ustozlar', 'Yangiliklar', 'Kontakt', 'FAQ'],
//   "Kurslar": ['Matematika', 'Fizika', 'Ingliz tili', 'Dasturlash', 'Kimyo', 'Biologiya'],
//   "Xizmatlar": ['Individual darslar', 'Guruh darslari', 'Online kurslar', 'Olimpiada tayyorlov', 'Test sinovlari'],
//   "Qoidalar": ['Maxfiylik siyosati', 'Foydalanish shartlari', 'Cookie sozlamalari', 'Qaytarish siyosati']
// }

// const socialMedia = [
//   { icon: Facebook, label: "Facebook", href: "#", color: "bg-blue-600 hover:bg-blue-700" },
//   { icon: Instagram, label: "Instagram", href: "#", color: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" },
//   { icon: Youtube, label: "YouTube", href: "#", color: "bg-red-600 hover:bg-red-700" },
//   { icon: Twitter, label: "Twitter", href: "#", color: "bg-blue-400 hover:bg-blue-500" },
//   { icon: MessageSquare, label: "Telegram", href: "#", color: "bg-blue-500 hover:bg-blue-600" }
// ]

// export function Footer() {
//   return (
//     <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
//       {/* Top Wave */}
//       <div className="relative h-20">
//         <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent" />
//         <svg className="absolute bottom-0 left-0 right-0" viewBox="0 0 1200 120" preserveAspectRatio="none">
//           <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
//             fill="currentColor" 
//             className="text-gray-900" 
//           />
//         </svg>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
//           {/* Company Info */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="lg:col-span-2 space-y-6"
//           >
//             <div className="flex items-center gap-3">
//               <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
//                 <span className="text-white font-bold text-xl">TO</span>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold">Talim Olami</h3>
//                 <p className="text-gray-400 text-sm">Professional O'quv Markazi</p>
//               </div>
//             </div>
            
//             <p className="text-gray-400 leading-relaxed">
//               15 yillik tajriba, 2000+ muvaffaqiyatli o'quvchi va 50+ professional ustoz.
//               Kelajagingizni biz bilan quring.
//             </p>
            
//             {/* Contact Info */}
//             <div className="space-y-3">
//               <div className="flex items-center gap-3 text-gray-300">
//                 <Phone className="h-5 w-5 text-blue-400" />
//                 +998 90 123 45 67
//               </div>
//               <div className="flex items-center gap-3 text-gray-300">
//                 <Mail className="h-5 w-5 text-emerald-400" />
//                 info@talim-olami.uz
//               </div>
//               <div className="flex items-center gap-3 text-gray-300">
//                 <MapPin className="h-5 w-5 text-amber-400" />
//                 Toshkent, O'zbekiston
//               </div>
//             </div>
            
//             {/* Social Media */}
//             <div>
//               <h4 className="font-semibold mb-3">Ijtimoiy Tarmoqlar</h4>
//               <div className="flex gap-2">
//                 {socialMedia.map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.href}
//                     whileHover={{ y: -3 }}
//                     whileTap={{ scale: 0.95 }}
//                     className={`${social.color} p-2 rounded-lg text-white hover:text-white transition-colors`}
//                   >
//                     <social.icon className="h-5 w-5" />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Footer Links */}
//           {Object.entries(footerLinks).map(([category, links], index) => (
//             <motion.div
//               key={category}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <h4 className="font-bold text-lg mb-4">{category}</h4>
//               <ul className="space-y-3">
//                 {links.map((link) => (
//                   <li key={link}>
//                     <Link 
//                       href="#" 
//                       className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block"
//                     >
//                       {link}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}

//           {/* Newsletter */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//             className="lg:col-span-5 mt-8 lg:mt-0"
//           >
//             <div className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
//               <h4 className="font-bold text-xl mb-3">Yangiliklarga Obuna Bo'ling</h4>
//               <p className="text-gray-400 mb-4">
//                 Yangi kurslar va aksiyalar haqida birinchi bo'lib xabardor bo'ling
//               </p>
//               <div className="flex gap-2">
//                 <Input 
//                   placeholder="Email manzilingiz" 
//                   className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-xl"
//                 />
//                 <Button 
//                   className="gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 rounded-xl"
//                 >
//                   <Send className="h-4 w-4" />
//                 </Button>
//               </div>
//               <p className="text-xs text-gray-500 mt-3">
//                 Obuna bo'lish orqali siz maxfiylik siyosatiga rozilik bildirasiz
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom Bar */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="border-t border-gray-800 mt-8 pt-8 text-center"
//         >
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="text-gray-400 text-sm">
//               © 2024 Talim Olami O'quv Markazi. Barcha huquqlar himoyalangan.
//             </div>
//             <div className="flex gap-6 text-sm">
//               <Link href="#" className="text-gray-400 hover:text-white transition-colors">
//                 Maxfiylik siyosati
//               </Link>
//               <Link href="#" className="text-gray-400 hover:text-white transition-colors">
//                 Foydalanish shartlari
//               </Link>
//               <Link href="#" className="text-gray-400 hover:text-white transition-colors">
//                 Cookie sozlamalari
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   )
// }

// components/footer.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Instagram, Youtube, Twitter, Send, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">TO</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Talim Olami</h3>
                <p className="text-sm text-muted-foreground">O'quv Markazi</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional ta'lim va sifatli o'qitish. 15 yildan ortiq tajriba.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Tezkor Havolalar</h4>
            <ul className="space-y-2">
              {['Bosh Sahifa', 'Kurslar', 'Ustozlar', 'Yangiliklar', 'Kontakt'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Aloqa</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                +998 90 123 45 67
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                info@talim-olami.uz
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Toshkent, O'zbekiston
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Yangiliklarga Obuna Bo'ling</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Yangi kurslar va aksiyalar haqida birinchi bo'lib xabardor bo'ling
            </p>
            <div className="flex gap-2">
              <Input placeholder="Email manzilingiz" className="flex-1" />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Talim Olami O'quv Markazi. Barcha huquqlar himoyalangan.</p>
          <div className="mt-2 flex justify-center gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Maxfiylik siyosati</Link>
            <Link href="#" className="hover:text-primary transition-colors">Foydalanish shartlari</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookie sozlamalari</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}