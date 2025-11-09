'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sprout } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '#about', label: 'Sobre' },
  { href: '#recipes', label: 'Receitas' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#pricing', label: 'Preços' },
  { href: '#contact', label: 'Contato' },
];

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Sprout className="h-6 w-6 text-primary" />
            <span className="font-headline whitespace-nowrap overflow-hidden text-ellipsis tracking-wider text-primary scale-x-130 text-2xl font-bold">Academia do Brownie</span>
          </Link>
        </div>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="relative overflow-hidden transition-transform duration-200 ease-in-out hover:scale-105 shadow-lg hover:shadow-primary/50">
            <Link href="https://pay.cakto.com.br/7a4pjou_631916">
              <span className="absolute inset-0 w-1/2 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
              Quero o meu agora!
            </Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                <Sprout className="h-6 w-6 text-primary" />
                <span className="font-headline text-2xl font-bold tracking-wider text-primary">Academia do Brownie</span>
              </Link>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg transition-colors hover:text-foreground"
                    onClick={() => setSheetOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
