import cn from 'classnames';

const Line: React.FC<{ size?: number; className?: string }> = ({
  size = 8,
  className,
}) => {
  return (
    <div role="status" className={cn('animate-pulse', className)}>
      {[...new Array(size)].map((_, index) => (
        <div
          key={index}
          className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"
        />
      ))}
    </div>
  );
};

/**
 * source: @see https://flowbite.com/docs/components/skeleton/
 */
export const Skeleton = {
  Line,
};
