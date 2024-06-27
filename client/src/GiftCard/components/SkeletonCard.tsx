import Skeleton from "react-loading-skeleton";
import { Card } from "..";

const SkeletonCard = () => {
  return (
    <Card>
      <div className="mb-1">
        <div className="mb-3">
          <Skeleton />
        </div>
        <Skeleton count={1} />
      </div>
      <Skeleton count={3} />
    </Card>
  );
};

export { SkeletonCard };
