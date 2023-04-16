// React Example
import nightwind from 'nightwind/helper'
export function NightwindInit() {
	return <> {<script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />} </>
}
