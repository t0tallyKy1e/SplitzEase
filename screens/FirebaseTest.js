import * as React from 'react';
import { Button, FlatList, Modal, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import * as defaults from '../constants/DefaultObjs';
import { PayTypes } from '../constants/Enums';

import { Constants } from 'expo';
import Colors from '../constants/Colors';

const AcctTests = ({ acctActions, account }) => {
  return (
    <View style={styles.reducer}>
      <View>
        <Text>Account Actions</Text>
        <Text>Account UID: {account.user.uid}</Text>
      </View>
      <Button
        color={Colors.cardAffirmButton}
        title='Login'
        onPress={() => {
          acctActions.login({
            uid: "LHtoZbLQcIgjHfnvpaVATU5j2AF3",
            email: "chris@learnmyr.org",
          })
        }}>
      </Button>
      <Button
        color={Colors.cardAffirmButton}
        title='Logout'
        onPress={() => {
          acctActions.logout()
        }}>
      </Button>
    </View>
  )
}

const CheckTests = ({ chkActions, checks }) => {
  const uid = 'qgay3df85tIo7aSO9qmg'
  const testCheckId = 'Mp077sHWAKsEkMJ9WWIn'
  return (
    <View style={styles.reducer}>
      <View>
        <Text>Check Actions</Text>
        <Text>Selected ID: {!!checks.selected && checks.selected.id}</Text>
        <Text>Selected AMT: {!!checks.selected && checks.selected.price}</Text>
        <Text>Checks ID: {!!checks.arr[0] && checks.arr[0].id}</Text>
        <Text>Checks AMT: {!!checks.arr[0] && checks.arr[0].price}</Text>
      </View>
      <Button
        color={Colors.cardAffirmButton}
        title='Get Check'
        onPress={() => {
          chkActions.getCheck(uid, testCheckId)
        }}>
      </Button>
      <Button
        color={Colors.cardAffirmButton}
        title='Get Checks'
        onPress={() => {
          chkActions.getChecks(uid)
        }}>
      </Button>
      <Button
        color={Colors.cardAffirmButton}
        title='Pay Check $0.10'
        onPress={() => {
          chkActions.payCheck(uid, testCheckId, 0.10)
        }}>
      </Button>
      <Button
        color={Colors.cardAffirmButton}
        title='Place $12.00 Check'
        onPress={() => {
          chkActions.createCheck(uid, {
            ...defaults.defaultCheck,
            host: 'qgay3df85tIo7aSO9qmg',
            price: parseFloat(12.00),
            rest: 'Applebees',
            payType: PayTypes.self,
          })
        }}>
      </Button>
    </View>
  )
}

const FriendTests = ({frndActions, friends}) => {
  let uid = 'test-12345'
  let lastId = !!friends.arr[0] ? friends.arr[0].id : ""
  // console.log(friends)

  return (
    <View style={styles.reducer}>
      <View>
        <Text>Friend Actions</Text>
        <Text>Friend Count: {friends.arr.length}</Text>
        <Text>Last Friend: {lastId} </Text>
      </View>
      <Button
        color={Colors.cardAffirmButton}
        title='Add Friends'
        onPress={() => {
          frndActions.addFriend(uid, defaults.defaultFriend)
        }}>
      </Button>
      <Button
        color={Colors.cardAffirmButton}
        title='Remove Friend'
        onPress={() => {
          frndActions.removeFriend(uid, lastId)
        }}>
      </Button>
      <Button
        color={Colors.cardAffirmButton}
        title='Get Friends'
        onPress={() => {
          frndActions.getFriends(uid)
        }}>
      </Button>
    </View>
  )
}

const InviteTests = ({inviteActions, invites}) => {
  let uid = 'test-12345'
  let inviteId = "wQ6T9Bybeu6aiS70DFSL"
  // let lastId = !!friends.arr[0] ? friends.arr[0].id : ""

  // console.log(invites)

  return (
    <View style={styles.reducer}>
      <View>
        <Text>Invite Actions</Text>
        <Text>Invites Count {invites.arr ? invites.arr.length : "0"} </Text>
      </View>
      <Button
        color={Colors.cardAffirmButton}
        title='Send Invites'
        onPress={() => {
          inviteActions.sendInvites(defaults.defaultInvite, ['test-12345'])
        }}>
      </Button>
      <Button
        color={Colors.cardAffirmButton}
        title='Accept Invite'
        onPress={() => {
          inviteActions.acceptInvite(uid, inviteId)
        }}>
      </Button>
      <Button
        color={Colors.cardAffirmButton}
        title='Decline Invite'
        onPress={() => {
          inviteActions.declineInvite(uid, inviteId)
        }}>
      </Button>
      <Button
        color={Colors.cardAffirmButton}
        title='Get Invites'
        onPress={() => {
          inviteActions.getInvites(uid)
        }}>
      </Button>
      
    </View>
  )
}

export default class FirebaseScreen extends React.Component {
  static navigationOptions = {
    title: 'Firebase Test',
    header: null,
  };


  render() {
    // console.log(this.props)
    return (
      <ScrollView>
        <AcctTests {...this.props} />
        <CheckTests {...this.props} />
        <FriendTests {...this.props} />
        <InviteTests {...this.props} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Colors.background,
  },

  fab: {
    backgroundColor: Colors.fabButton,
    bottom: 20,
    color: Colors.fabButtonText,
    fontSize: 20,
    height: 30,
    justifyContent: 'center',
    margin: 5,
    position: 'absolute',
    right: 20,
    width: 30,
  },

  fabButton: {
    height: 5,
    width: 5,
  },

  horizontalRule: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    marginBottom: 5,
    marginTop: 5,
  },

  horizontalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },

  modalButton: {
    bottom: 20,
    justifyContent: 'center',
    position: 'absolute',
    width: 300,
  },

  modalInner: {
    backgroundColor: Colors.background,
    borderRadius: 20,
    height: 300,
    padding: 20,
    width: 300,
  },

  modalInput: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 5,
    color: Colors.text,
    fontSize: 20,
    height: 40,
    marginBottom: 10,
    paddingLeft: 20,
  },

  modalMultilineInput: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 5,
    color: Colors.text,
    fontSize: 20,
    height: 40,
    marginBottom: 10,
    paddingLeft: 20,
  },

  modalOuter: {
    alignItems: 'center',
    backgroundColor: Colors.transparentBackDrop,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },

  modalTitle: {
    fontSize: 25,
  },

  order: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 20,
    margin: 10,
    paddingBottom: 10,
    overflow: 'hidden',
  },

  orderHeader: {
    backgroundColor: Colors.cardHeader,
    color: Colors.cardHeaderText,
    padding: 10,
  },

  orderWrapper: {
    shadowColor: '#000000',
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 0.5,
  },

  tabbedText: {
    paddingLeft: 10,
    paddingTop: 10,
  },

  titleBarText: {
    fontFamily: 'PingFangSC-Thin',
    fontSize: 50,
    justifyContent: 'center',
    margin: 3,
    padding: 5,
  },
  reducer: {
    padding: 20,
    margin: 10
  }
});
