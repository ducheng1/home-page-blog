'use client'

import { useState } from 'react'

import styles from './home.module.css'

const directions = [
  { id: 'print', index: '01', name: '纸上书', note: '独立刊物 · 温暖纸白' },
  { id: 'terminal', index: '02', name: '终端实验室', note: '开发工作台 · 墨色与荧绿' },
  { id: 'garden', index: '03', name: '数字花园', note: '漫游索引 · 苔绿与留白' },
] as const

type Direction = (typeof directions)[number]['id']

const articles = [
  {
    tag: '开发札记',
    number: '01',
    title: '写给自己的项目说明，为什么比 README 更重要',
    time: '最近更新',
  },
  {
    tag: '前端与设计',
    number: '02',
    title: '给组件留一点空白：界面里的节制练习',
    time: '随手记录',
  },
  { tag: '日常想法', number: '03', title: '把未完成的想法放在一个看得见的地方', time: '进行中' },
]

const projects = [
  { name: 'Personal Blog', kind: '个人网站', status: '持续完善', symbol: '✳' },
  { name: 'Small Experiments', kind: '代码实验', status: '边做边记', symbol: '⌁' },
]

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a
      aria-label="ducheng1，回到首页"
      className={`${styles.brand} ${compact ? styles.compactBrand : ''}`}
      href="#home"
    >
      ducheng<span>1</span>
    </a>
  )
}

function Navigation({ direction }: { direction: Direction }) {
  const isTerminal = direction === 'terminal'

  return (
    <header className={`${styles.nav} ${isTerminal ? styles.navTerminal : ''}`}>
      <Brand />
      <nav aria-label="主导航" className={styles.links}>
        <a className={styles.navActive} href="#home">
          首页
        </a>
        <a href="#blog">博客</a>
        <a href="#projects">项目</a>
        <a href="#about">关于</a>
      </nav>
      <a className={styles.navContact} href="mailto:w729567588@163.com">
        <span className={styles.contactDot} />
        <span>{isTerminal ? 'CONTACT' : '聊聊想法'}</span>
        {isTerminal && ' — 02'}
      </a>
    </header>
  )
}

function BotanicalCircuit() {
  return (
    <svg aria-hidden="true" className={styles.circuit} fill="none" viewBox="0 0 510 450">
      <path
        d="M248 419c-5-84-7-143 6-223m-6 165c-33-57-78-78-130-91m139 45c40-57 84-88 147-99M253 257c-30-59-34-101-12-158m28 131c53-25 91-64 111-111M230 244c-49-35-72-81-70-137"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
      <path
        d="M248 361c-1-34-37-63-87-76 4 43 34 75 87 76Zm10-35c9-38 42-65 96-80-7 45-39 72-96 80Zm-4-97c-35-29-45-66-26-113 33 34 42 72 26 113Zm31-14c33-36 69-52 108-50-21 39-55 56-108 50Zm-59 13c-47-16-72-46-72-88 46 20 70 50 72 88Z"
        fill="currentColor"
        fillOpacity=".12"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle cx="254" cy="184" r="4" fill="currentColor" />
      <circle cx="129" cy="269" r="3" fill="currentColor" />
      <circle cx="404" cy="216" r="3" fill="currentColor" />
      <circle cx="235" cy="99" r="3" fill="currentColor" />
      <path
        d="M22 374h67m10 0h29M379 79h41m11 0h55M319 416h88"
        stroke="currentColor"
        strokeDasharray="1 6"
        strokeLinecap="round"
        strokeOpacity=".6"
      />
    </svg>
  )
}

function EditorialHero() {
  return (
    <section className={styles.editorialHero} id="home">
      <div className={styles.editionLabel}>
        <span className={styles.editionMark}>D.</span>
        <span>A PERSONAL NOTEBOOK ON THE WEB</span>
        <span>EST. 2024</span>
      </div>
      <div className={styles.editorialTitleBlock}>
        <p className={styles.eyebrow}>你好，我是 ducheng1</p>
        <h1>
          把路走过，
          <br />
          也把它写下来。
        </h1>
        <p className={styles.editorialIntro}>
          一个开发者的个人角落。聊聊代码、正在做的小项目，
          <br className={styles.desktopBreak} />
          以及那些想了很久终于想明白的事情。
        </p>
        <a className={styles.textAction} href="#blog">
          <span>从最近的一篇读起</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div aria-hidden="true" className={styles.editionFootnote}>
        <span>独立写作 · 持续更新</span>
        <span>SCROLL TO EXPLORE &nbsp; ↓</span>
      </div>
    </section>
  )
}

function TerminalHero() {
  return (
    <section className={styles.terminalHero} id="home">
      <div className={styles.terminalGrid} />
      <div className={styles.terminalPrompt}>
        <span className={styles.promptDot} />
        <span>~/home/ducheng1</span>
        <span className={styles.promptBranch}>main</span>
        <span>·</span>
        <span>build something useful</span>
      </div>
      <div className={styles.terminalContent}>
        <p className={styles.terminalEyebrow}>SOFTWARE DEVELOPER &nbsp;/&nbsp; NOTE TAKER</p>
        <h1>
          写代码，
          <br />
          也写下途中所想<span className={styles.cursor}>_</span>
        </h1>
        <p className={styles.terminalIntro}>
          这里存放最近的实验、认真做的项目，
          <br />
          以及一次次踩坑后得到的小小结论。
        </p>
        <a className={styles.terminalAction} href="#blog">
          <span>阅读最新文章</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className={styles.terminalStats}>
        <span>
          01 <i>写作</i> <b>持续更新</b>
        </span>
        <span>
          02 <i>项目</i> <b>边做边记</b>
        </span>
        <span>
          03 <i>想法</i> <b>慢慢整理</b>
        </span>
      </div>
      <span className={styles.terminalWatermark}>200</span>
    </section>
  )
}

function GardenHero() {
  return (
    <section className={styles.gardenHero} id="home">
      <div className={styles.gardenIntro}>
        <p className={styles.gardenEyebrow}>
          <span /> DIGITAL GARDEN &nbsp;·&nbsp; 常来坐坐
        </p>
        <h1>
          想法会生长，
          <br />
          写下来就是开始。
        </h1>
        <p className={styles.gardenDescription}>
          你好，我是 <strong>ducheng1</strong>
          。这里是一片慢慢打理的数字花园，种着代码、项目，也种一些还没长成答案的问题。
        </p>
        <a className={styles.gardenAction} href="#blog">
          去花园里逛逛 <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className={styles.gardenArtwork}>
        <div className={styles.gardenSun} />
        <div className={styles.gardenTag}>ideas / growing</div>
        <BotanicalCircuit />
        <span className={styles.artworkCaption}>生长中的想法 · NO. 01</span>
      </div>
      <div className={styles.gardenIndex}>
        <span>文字与记录</span>
        <span>01 — 逐渐长成</span>
      </div>
    </section>
  )
}

function SiteContent({ direction }: { direction: Direction }) {
  const isGarden = direction === 'garden'
  const isTerminal = direction === 'terminal'

  return (
    <>
      <section
        className={`${styles.stories} ${isGarden ? styles.gardenStories : ''} ${isTerminal ? styles.terminalStories : ''}`}
        id="blog"
      >
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionOverline}>
              {isGarden
                ? 'GROWING NOTES  /  写作角落'
                : isTerminal
                  ? '// LATEST_LOGS'
                  : 'NOTEBOOK  /  01'}
            </p>
            <h2>{isGarden ? '最近在想的事' : isTerminal ? '最近写了什么' : '最近写下的'}</h2>
          </div>
          <a className={styles.sectionLink} href="mailto:w729567588@163.com">
            {isTerminal ? 'OPEN ALL →' : '所有文章 ↗'}
          </a>
        </div>
        <div className={styles.storyList}>
          {articles.map((article) => (
            <a
              className={styles.storyRow}
              href="mailto:w729567588@163.com?subject=ducheng1%E7%9A%84%E6%96%87%E7%AB%A0"
              key={article.number}
            >
              <span className={styles.storyNumber}>{article.number}</span>
              <span className={styles.storyText}>
                <span className={styles.storyTag}>{article.tag}</span>
                <span className={styles.storyTitle}>{article.title}</span>
              </span>
              <span className={styles.storyTime}>{article.time}</span>
              <span aria-hidden="true" className={styles.storyArrow}>
                ↗
              </span>
            </a>
          ))}
        </div>
        <p className={styles.sampleNote}>文章内容正在整理中，这里先展示博客首页的排版方向。</p>
      </section>
      <section
        className={`${styles.projects} ${isGarden ? styles.gardenProjects : ''}`}
        id="projects"
      >
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionOverline}>
              {isGarden
                ? 'LITTLE THINGS  /  小小作品'
                : isTerminal
                  ? '// ON_THE_BENCH'
                  : 'MADE BY HAND  /  02'}
            </p>
            <h2>{isGarden ? '一些生长着的作品' : '正在做的事'}</h2>
          </div>
          <span className={styles.sectionLink}>SMALL, BUT IN PROGRESS</span>
        </div>
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <div className={styles.projectRow} key={project.name}>
              <span className={styles.projectSymbol}>
                {isGarden ? project.symbol : `0${index + 1}`}
              </span>
              <div className={styles.projectInfo}>
                <span className={styles.projectName}>{project.name}</span>
                <span className={styles.projectKind}>{project.kind}</span>
              </div>
              <span className={styles.projectStatus}>
                <span />
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </section>
      <footer className={`${styles.footer} ${isTerminal ? styles.terminalFooter : ''}`} id="about">
        <div>
          <p className={styles.sectionOverline}>
            {isGarden ? 'SEE YOU AROUND' : isTerminal ? '// END_OF_PAGE' : 'A NOTE FROM THE AUTHOR'}
          </p>
          <h2>{isGarden ? '欢迎常来，看看新芽。' : '路还很长，欢迎一起走走。'}</h2>
          <p className={styles.footerCopy}>
            {isTerminal ? '有什么好的想法？来交换一下。' : '我会继续在这里写、做，也欢迎你来交流。'}
          </p>
          <a className={styles.footerLink} href="mailto:w729567588@163.com">
            {isTerminal ? 'SEND A MESSAGE →' : '给我写封邮件 ↗'}
          </a>
        </div>
        <div className={styles.footerBottom}>
          <Brand compact={true} />
          <span>一些认真写下的东西，献给同样认真生活的人。</span>
          <span>© 2026 &nbsp; ducheng1</span>
        </div>
      </footer>
    </>
  )
}

export function HomeExperience() {
  const [direction, setDirection] = useState<Direction>('print')
  const theme =
    direction === 'print'
      ? styles.print
      : direction === 'terminal'
        ? styles.terminal
        : styles.garden

  return (
    <main className={`${styles.page} ${theme}`}>
      <aside aria-label="选择首页设计方向" className={styles.previewBar}>
        <span className={styles.previewLabel}>
          <span className={styles.previewSparkle}>✳</span> 首页设计提案
        </span>
        <span className={styles.previewHint}>选择一种风格，预览完整首页</span>
        <div aria-label="首页风格" className={styles.directionList} role="group">
          {directions.map((item) => (
            <button
              aria-pressed={direction === item.id}
              className={`${styles.directionOption} ${direction === item.id ? styles.directionSelected : ''}`}
              key={item.id}
              onClick={() => setDirection(item.id)}
              type="button"
            >
              <span className={styles.directionIndex}>{item.index}</span>
              <span className={styles.directionName}>{item.name}</span>
              <span className={styles.directionNote}>{item.note}</span>
            </button>
          ))}
        </div>
      </aside>
      <div className={styles.site}>
        <Navigation direction={direction} />
        {direction === 'print' ? (
          <EditorialHero />
        ) : direction === 'terminal' ? (
          <TerminalHero />
        ) : (
          <GardenHero />
        )}
        <SiteContent direction={direction} />
      </div>
    </main>
  )
}
