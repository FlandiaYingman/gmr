import Confetti from "@/components/confetti";

export default function Main() {
  return (
    <>
      <Confetti />

      <main className="flex items-center justify-center min-h-screen p-4 text-center flex-col space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl text-white">
          gmr 生日快乐!
          <br />
          🎉🎂🎈🎁🎊
        </h1>
        <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white animate-scaling-110 max-w-2xl">
          今天你生日送上我祝福，特别的日子有灿烂的笑容，我们来相聚。带着满满的关爱，祝福你好运常伴。点燃了蜡烛，许下你心愿。未来的日子每个梦想都实现，唱首祝福歌。
          我们相亲又相爱，祝福你健康平安。对所有的烦恼说 Bye Bye，对所有的快乐说
          Hi
          Hi。亲爱的亲爱的生日快乐，每一天都精彩。看幸福的花儿为你盛开，听美妙的音乐为你喝彩。亲爱的亲爱的生日快乐，祝你幸福永远。幸福永远，点燃了蜡烛。许下你心愿，未来的日子每个梦想都实现，唱首祝福歌。我们相亲又相爱，祝福你健康平安。
          对所有的烦恼说 Bye Bye，对所有的快乐说Hi
          Hi。亲爱的亲爱生日快乐，每一天都精彩。看幸福的花儿为你盛开，听美妙的音乐为你喝彩。亲爱的亲爱的生日快乐，祝你幸福永远，幸福永远
        </p>
      </main>
    </>
  );
}
