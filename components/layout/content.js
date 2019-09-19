import cn from 'classnames'
import ZenContext from '~/lib/zen-context'

const getContent = (zenModeActive, children, center, small) => {
  return (
    <div
      className={cn('content', {
        'content-zen-mode': zenModeActive,
        center,
        small
      })}
    >
      {children}
      <style jsx>{`
        .content {
          display: flex;
          flex-direction: column;
          flex: 0 0 100%;
          padding-bottom: 64px;
        }

        .content.small {
          flex: 0 0 672px;
        }

        .content.center {
          margin: 0 auto;
        }

        :global(.sidebar) + .content {
          margin-left: auto;
          max-width: calc(100% - 280px);
          padding-left: 24px;
        }

        .content-zen-mode {
          padding-left: 0;
        }

        @media screen and (max-width: 950px) {
          :global(.sidebar) + .content,
          .content {
            padding-left: 0;
            margin-left: 0;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

const Content = ({ children, center, small }) => (
  <ZenContext.Consumer>
    {zenModeActive => getContent(zenModeActive, children, center, small)}
  </ZenContext.Consumer>
)

export default Content
