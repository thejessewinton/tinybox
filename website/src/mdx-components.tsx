import { CommandLineIcon } from '@heroicons/react/24/solid'
import { DocumentIcon } from '@heroicons/react/24/solid'
import type { MDXComponents } from 'mdx/types'
import type { ComponentPropsWithoutRef } from 'react'
import { CodeBlock } from '~/components/docs/code-block'
import { Table } from '~/components/shared/table'
import { CopyButton } from './components/docs/copy-button'

export const components: MDXComponents = {
  h1: ({ children, ...props }: ComponentPropsWithoutRef<'h1'>) => {
    return (
      <h1 className="mt-8 mb-4 scroll-m-8 font-bold text-4xl" {...props}>
        {children}
      </h1>
    )
  },
  h2: ({ children, ...props }: ComponentPropsWithoutRef<'h2'>) => {
    return (
      <h2 className="mt-8 mb-4 scroll-m-8 font-bold text-2xl" {...props}>
        {children}
      </h2>
    )
  },
  pre: ({
    children,
    filename,
    raw,
  }: ComponentPropsWithoutRef<'pre'> & {
    raw: string
    filename?: string
  }) => {
    return (
      <div className="flex flex-col overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700/40">
        <div className="flex items-center justify-between gap-2 border-neutral-200 border-b bg-neutral-100 p-4 dark:border-neutral-700/40 dark:bg-neutral-800/40">
          <div className="flex items-center gap-2">
            {filename === 'Terminal' ? (
              <CommandLineIcon className="size-4 text-tertiary" />
            ) : (
              <DocumentIcon className="size-4 text-tertiary" />
            )}
            <span className="font-medium text-sm text-tertiary">
              {filename}
            </span>
          </div>
          <CopyButton content={raw} />
        </div>

        <pre className="overflow-auto p-4">{children}</pre>
      </div>
    )
  },
  CodeBlock,
  Table: Table.Root,
  TableHead: Table.Head,
  TableHeader: Table.Header,
  TableBody: Table.Body,
  TableRow: Table.Row,
  TableCell: Table.Cell,
}
