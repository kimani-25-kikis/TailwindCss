import React from 'react'

function Card({username="Name", post ='Not assigned yet'}) {
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://media.istockphoto.com/id/1987947526/photo/aerial-view-on-amazing-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=_lnDhN81YUlffOr2nuApQCDQ7R5KfUjY6RkXF3dxPIE=" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
       Nature is the most loving and comfortable dynamics ever given to us by God, lets cherish it
      </p>
    </blockquote>
    <figcaption>
      <div>
        {username}
      </div>
      <div>
        {post}
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Card
