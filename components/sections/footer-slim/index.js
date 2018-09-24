import Section from '../section'
import Grid, { Column } from '../../grid'
import WulkanoAndFriends from './wulkano-and-friends'
import Links from './links'

export default () => (
  <Section style={{ marginTop: '32px' }}>
    <Grid style={{ marginBottom: '0px' }}>
      <Column>
        <WulkanoAndFriends />
      </Column>
      <Column>
        <Links />
      </Column>
    </Grid>
  </Section>
)
