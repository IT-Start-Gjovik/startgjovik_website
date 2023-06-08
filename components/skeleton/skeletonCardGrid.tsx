import { SkeletonCard } from "./skeletonCard"

export const SkeletonCardGrid = ()=>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-x-0 justify-center">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>



    )


}