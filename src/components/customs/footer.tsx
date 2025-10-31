export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/50 rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold">✈</span>
              </div>
              <span className="font-bold text-foreground">AAEA</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Celebrating excellence in aviation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Awards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Register
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>Email: info@aaea.ng</li>
              <li>Phone: +234 (0) XXX XXXX</li>
              <li>Abuja, Nigeria</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-sm text-foreground/60">
          <p>
            &copy; 2025 Abuja Aviation Excellence Awards. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
