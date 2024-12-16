'use client'

import { useHash } from '~/hooks/use-hash'
import { cn } from '~/utils/cn'

type TableOfContentsProps = {
  headings: Array<{ value: string; id: string }>
}

export const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const hash = useHash()
  console.log(hash)

  return (
    <div className="sticky top-16 h-fit w-2xs pb-2">
      <div className="flex items-center gap-2 font-medium text-secondary text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M2.75 12H21.25M2.75 5.75H21.25M2.75 18.25H11.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Table of contents
      </div>
      <ul className="mt-8 h-fit space-y-2 border-neutral-200 border-l border-dashed pl-6 dark:border-neutral-700/40">
        {headings.map((heading) => (
          <li
            key={heading.value}
            className={cn(
              'before:-translate-y-1/2 before:-left-[calc(var(--spacing)_*_6_+_1px)] relative before:absolute before:top-1/2 before:block before:h-5 before:w-px before:bg-neutral-700 before:opacity-0 before:transition-opacity',
              {
                'before:opacity-100': hash === heading.id,
              },
            )}
          >
            <a href={`#${heading.id}`}>{heading.value}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
