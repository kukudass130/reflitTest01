import { APP_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="text-center text-xs text-[hsl(var(--text-secondary))] mt-8">
      <div className="mb-2">©2023 {APP_INFO.developer}</div>
      <div className="flex justify-center space-x-4">
        <a href="#" className="hover:text-[hsl(var(--text-primary))]">개인정보처리방침</a>
        <a href="#" className="hover:text-[hsl(var(--text-primary))]">서비스 이용약관</a>
        <a href="#" className="hover:text-[hsl(var(--text-primary))]">고객지원</a>
      </div>
    </footer>
  );
}
