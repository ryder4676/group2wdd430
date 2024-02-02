// app/layout.tsx
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Common layout elements */}
      {children}
    </div>
  );
};

export default Layout;
