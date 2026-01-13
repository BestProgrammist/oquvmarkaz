// components/auth/auth-button.tsx
"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LogIn, User, Lock, Mail, Eye, EyeOff } from 'lucide-react'

export function AuthButton() {
  const [open, setOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <LogIn className="h-4 w-4" />
          Kirish
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-center">Hisobga Kirish</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Kirish</TabsTrigger>
            <TabsTrigger value="register">Ro'yxatdan o'tish</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="login-email">Email yoki Foydalanuvchi nomi</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="login-email" placeholder="email@misol.com" className="pl-10" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="login-password">Parol</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="login-password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Parolingiz" 
                  className="pl-10 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            
            <div className="text-right">
              <Button variant="link" className="px-0 text-sm">
                Parolni unutdingizmi?
              </Button>
            </div>
            
            <Button className="w-full">Kirish</Button>
            
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Yoki
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                </svg>
                Google
              </Button>
              <Button variant="outline" className="gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-3.862c0-1.881-2.002-1.722-2.002 0v3.862h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                </svg>
                LinkedIn
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="register" className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">Ism</Label>
                <Input id="first-name" placeholder="Ismingiz" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Familiya</Label>
                <Input id="last-name" placeholder="Familiyangiz" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="register-email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="register-email" type="email" placeholder="email@misol.com" className="pl-10" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="register-password">Parol</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="register-password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Parol yarating" 
                  className="pl-10 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Parolni tasdiqlang</Label>
              <Input id="confirm-password" type="password" placeholder="Parolni takrorlang" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="role">Hisob turi</Label>
              <select id="role" className="w-full px-3 py-2 border rounded-md">
                <option value="student">O'quvchi</option>
                <option value="teacher">O'qituvchi</option>
                <option value="parent">Ota-ona</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="h-4 w-4" />
              <Label htmlFor="terms" className="text-sm">
                Men <a href="#" className="text-primary underline">foydalanish shartlari</a> bilan roziman
              </Label>
            </div>
            
            <Button className="w-full">Ro'yxatdan o'tish</Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}