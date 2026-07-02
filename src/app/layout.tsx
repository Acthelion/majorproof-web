import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MajorProof | 专业能力证据资产系统",
    template: "%s | MajorProof",
  },
  description:
    "MajorProof 面向大学生提供专业能力证据资产，帮助学生将课程学习、项目训练和分析能力整理为可展示、可解释、可用于简历和面试的成果。",
  keywords: [
    "MajorProof",
    "专业能力证明",
    "大学生作品集",
    "求职项目",
    "实习准备",
    "简历项目",
    "能力证据",
    "work sample",
    "proof of skill",
    "professional portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}