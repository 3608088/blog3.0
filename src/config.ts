import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "AYaka Blog", // 网站标题
	subtitle: "给你所爱", // 网站副标题
	lang: "zh_CN", // 网站语言: 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th', 'vi'
	themeColor: {
		hue: 345, // 主题色的默认色相值（0-360）。例如红色:0，蓝绿色:200，青色:250，粉色:345
		fixed: true, // 对访客隐藏主题色选择器
	},
	banner: {
		enable: true, // 启用横幅图片
		src: "https://eo-pic.2x.nz/h", // 横幅图片路径。相对于 /src 目录。若以 '/' 开头则相对于 /public 目录
		position: "center", // 等同于 object-position 属性，仅支持 'top'、'center'、'bottom'。默认为 'center'
		credit: {
			enable: true, // 显示横幅图片的作者署名信息
			text: "", // 展示的署名文本
			url: "", // (可选) 指向原始作品或作者页面的 URL 链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 目录中显示的最大标题层级（1-3）
	},
	favicon: [
		// 保留此数组为空则使用默认网站图标 (favicon)
		// {
		//   src: '/favicon/icon.png',    // 图标路径（相对于 /public 目录）
		//   theme: 'light',              // (可选) 'light' 或 'dark'，仅在需要为浅色/深色模式设置不同图标时使用
		//   sizes: '32x32',              // (可选) 图标尺寸，仅在需要提供不同尺寸的图标时设置
		// }
	],
};

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home, // 首页链接预设
    LinkPreset.Archive, // 归档链接预设
    LinkPreset.About, // 关于链接预设
    {
      name: 'AYAKA图床', // 链接名称
      url: 'https://image.ayaka0.top/',     // 链接 URL。内部链接不应包含基础路径，因为它会自动添加
      external: true,                               // 显示外部链接图标并在新标签页中打开
    },
    {
      name: 'AO3镜像站', // 链接名称
      url: 'https://ao3.ayaka0.top/',     // 链接 URL。内部链接不应包含基础路径，因为它会自动添加
      external: true,                               // 显示外部链接图标并在新标签页中打开
    },
  ],
}

export const profileConfig: ProfileConfig = {
	avatar: "https://image.ayaka0.top/file/1754200173748_1754199767568.webp", // 头像图片 URL。相对于 /src 目录。若以 '/' 开头则相对于 /public 目录
	name: "Kamisato Ayaka", // 显示的名称
	bio: "保护你所爱！❤", // 个人简介
	links: [
		{
      name: 'Email', // 链接名称 (Email)
      icon: 'fa6-solid:envelope', // 链接图标 (Font Awesome 6 Solid 信封)
      url: 'mailto:admin@ayaka0.top', // 邮箱链接 URL
		},
		{
			name: "GitHub", // 链接名称 (GitHub)
			icon: "fa6-brands:github", // 链接图标 (Font Awesome 6 Brands GitHub)
			url: "https://github.com/kamisato-ayaka-qwq/", // GitHub 个人主页 URL
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true, // 启用许可证信息显示
	name: "CC BY-NC-SA 4.0", // 许可证名称 (知识共享 署名-非商业性使用-相同方式共享 4.0 国际)
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/", // 许可证详细信息的 URL
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式（例如背景颜色）会被覆盖，请查看 astro.config.mjs 文件。
	// 请选择深色主题，因为此博客主题当前仅支持深色背景
	theme: "github-dark", // 代码块主题: GitHub Dark
};