import { defineComponentMetadata } from '@/components/define'
import { select, selectAll } from '@/core/spin-query'
import { delay } from '@/core/utils'

const displayName = '隐藏首页自动加载视频卡片'

const remove = async () => {
  await delay(10000)

  const el = await select('.load-more-anchor')
  el.remove()

  let els = await selectAll('.container > :is(.bili-feed-card, .bili-video-card)')
  els.forEach(e => e.remove())

  els = await selectAll('.floor-single-card')
  els.forEach(e => e.remove())
}

export const component = defineComponentMetadata({
  name: 'removeBiliFeedCard',
  entry: async () => {
    await remove()
  },
  displayName,
  description: '（自用）隐藏首页自动加载视频卡片，只保留换一换卡片',
  tags: [componentsTags.style],
  urlInclude: [/^https:\/\/www\.bilibili\.com\/$/],
  instantStyles: [
    {
      name: 'removeBiliFeedCard',
      style: () => import('./styles.scss'),
    },
  ],
})
