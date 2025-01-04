'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import quickLinksContent from '@/data/quick-links'

const { statusOne, statusTwo, statusThree, links } = quickLinksContent

export default function QuickLinks() {
  return (
    <div className="space-y-6">
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card className="bg-primary/10 border-primary/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-primary text-2xl">
                Status &#128204;
              </CardTitle>
            </CardHeader>
            <CardContent className="max-h-28 overflow-y-auto flex flex-wrap gap-2 cursor-pointer">
              {statusOne && (
                <span className="inline-flex items-center rounded-md bg-primary/20 px-3 py-1 text-sm">
                  {statusOne}
                </span>
              )}
              {statusTwo && (
                <span className="inline-flex items-center rounded-md bg-primary/20 px-3 py-1 text-sm">
                  {statusTwo}
                </span>
              )}
              {statusThree && (
                <span className="inline-flex items-center rounded-md bg-primary/20 px-3 py-1 text-sm">
                  {statusThree}
                </span>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Card className="w-full backdrop-blur-sm bg-background/80 border-border/40 shadow-xl">
        <CardHeader className="space-y-1 pb-4">
          <CardTitle className="text-2xl">Quick Links &#128279;</CardTitle>
        </CardHeader>
        <CardContent className="max-h-48 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-transparent space-y-3 pb-4">
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
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

