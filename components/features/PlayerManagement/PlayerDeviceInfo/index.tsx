import { DeviceInfoCard } from "../../../common/deviceInfoCard"

export const PlayerDeviceInfo = () => {
    return (
        <div className='flex flex-wrap gap-3 justify-evenly mb-4'>
            <DeviceInfoCard color={'blue'} count={700} title={'TOTAL DEVICES'} icon={''} />
            <DeviceInfoCard color={'green'} count={700} title={'TOTAL DEVICES'} icon={''} />
            <DeviceInfoCard color={'red'} count={700} title={'TOTAL DEVICES'} icon={''} />
            <DeviceInfoCard color={'blue'} count={700} title={'TOTAL DEVICES'} icon={''} />
        </div>
    )
}