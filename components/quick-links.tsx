'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

const links = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/codecraftsman' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/codecraftsman' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/codecraftsman' },
]

export default function QuickLinks() {
  return (
    <Card className="w-full backdrop-blur-sm bg-background/80 border-border/40">
      <CardHeader className="space-y-1 pb-4">
        <CardTitle className="text-2xl">Quick Links</CardTitle>
        <CardDescription className="text-base">Connect with me on social media</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {links.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Button 
              variant="outline" 
              className="w-full justify-start h-12 text-base hover:scale-[1.02] transition-transform"
              asChild
            >
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <link.icon className="mr-3 h-5 w-5" />
                {link.name}
              </a>
            </Button>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="mt-6"
        >
          <Card className="bg-primary/10 border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-primary text-lg">Status</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                🚀 Open to work! Looking for Full-Time Software Engineering roles.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </CardContent>
    </Card>
  )
}
