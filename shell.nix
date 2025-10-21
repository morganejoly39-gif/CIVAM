let
  pkgs = import <nixpkgs> {};
in pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_20
    git
    python3
    pkg-config
    gcc
    gnumake
    vips
    openssl
    sqlite
  ];

  shellHook = ''
    echo "✅ Dev shell Next.js prêt. Node: $(node -v); npm: $(npm -v)"
    corepack enable >/dev/null 2>&1 || true
  '';
}
