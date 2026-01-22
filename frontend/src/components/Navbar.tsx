'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Memory Pal Logo WIP
import { Button } from './ui/button';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/chat', label: 'Chat' },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3 group">
          <HawkLogo size="sm" animated={false} />
          <span className="text-xl font-semibold tracking-tight">
            Memory<span className="text-primary">Pal</span>
          </span>
        </Link>

        {/* Nav items */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link key={item.path} href={item.path}>
                <Button
                  variant={isActive ? 'secondary' : 'ghost'}
                  size="sm"
                  className="relative"
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-secondary rounded-md -z-10"
                    />
                  )}
                </Button>
              </Link>
            );
          })}

          {/* CTA */}
          <Link href="/chat" className="ml-4">
            <Button size="sm" className="glow-border">
              Let Memory Pal Memorize It...
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;