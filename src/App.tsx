import { Bell, BellPlus, Check, X } from "lucide-react"
import { Notification } from "./componets/Notification"

function App() {
  return (
    <>
      <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Composition Pattern</h1>

          <Notification.Root>
            <Notification.Icon icon={Bell}/>
            <Notification.Content text="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet."/>
            <Notification.Actions>
              <Notification.Button onClick={() => {alert("close button")}} icon={X}/>
              <Notification.Button onClick={() => {alert("check button")}} icon={Check}/>
            </Notification.Actions>
          </Notification.Root>

          <Notification.Root>
            <Notification.Content className="font-semibold text-lg" text="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet."/>
            <Notification.Actions>
              <Notification.Button className="bg-emerald-600 hover:bg-emerald-500" onClick={() => {alert("check button")}} icon={Check}/>
            </Notification.Actions>
          </Notification.Root>

          <Notification.Root>
            <Notification.Icon icon={BellPlus} className="text-amber-500"/>
            <Notification.Content text="Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet."/>
          </Notification.Root>
      </div>
    </>
  )
}

export default App
