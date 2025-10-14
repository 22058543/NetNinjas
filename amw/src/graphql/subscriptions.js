/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMedia = /* GraphQL */ `
  subscription OnCreateMedia($filter: ModelSubscriptionMediaFilterInput) {
    onCreateMedia(filter: $filter) {
      id
      parentId
      timestamp
      imageUrl
      videoUrl
      mediaSizeMegaBytes
      isVideo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateMedia = /* GraphQL */ `
  subscription OnUpdateMedia($filter: ModelSubscriptionMediaFilterInput) {
    onUpdateMedia(filter: $filter) {
      id
      parentId
      timestamp
      imageUrl
      videoUrl
      mediaSizeMegaBytes
      isVideo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteMedia = /* GraphQL */ `
  subscription OnDeleteMedia($filter: ModelSubscriptionMediaFilterInput) {
    onDeleteMedia(filter: $filter) {
      id
      parentId
      timestamp
      imageUrl
      videoUrl
      mediaSizeMegaBytes
      isVideo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
      timestamp
      message
      title
      storyId
      StoryName
      inviteCode
      storyImageUrl
      isRead
      isStoryJoined
      redirectUrl
      momentId
      fromUser {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      toUser {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      notificationFromUserId
      notificationToUserId
      __typename
    }
  }
`;
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onUpdateNotification(filter: $filter) {
      timestamp
      message
      title
      storyId
      StoryName
      inviteCode
      storyImageUrl
      isRead
      isStoryJoined
      redirectUrl
      momentId
      fromUser {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      toUser {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      notificationFromUserId
      notificationToUserId
      __typename
    }
  }
`;
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onDeleteNotification(filter: $filter) {
      timestamp
      message
      title
      storyId
      StoryName
      inviteCode
      storyImageUrl
      isRead
      isStoryJoined
      redirectUrl
      momentId
      fromUser {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      toUser {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      notificationFromUserId
      notificationToUserId
      __typename
    }
  }
`;
export const onCreateAttachment = /* GraphQL */ `
  subscription OnCreateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onCreateAttachment(filter: $filter) {
      id
      parentId
      userId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      timestamp
      elementId
      element {
        id
        parentId
        timestamp
        imageUrl
        videoUrl
        mediaSizeMegaBytes
        isVideo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      type
      awswerId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      attachmentUserId
      __typename
    }
  }
`;
export const onUpdateAttachment = /* GraphQL */ `
  subscription OnUpdateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onUpdateAttachment(filter: $filter) {
      id
      parentId
      userId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      timestamp
      elementId
      element {
        id
        parentId
        timestamp
        imageUrl
        videoUrl
        mediaSizeMegaBytes
        isVideo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      type
      awswerId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      attachmentUserId
      __typename
    }
  }
`;
export const onDeleteAttachment = /* GraphQL */ `
  subscription OnDeleteAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onDeleteAttachment(filter: $filter) {
      id
      parentId
      userId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      timestamp
      elementId
      element {
        id
        parentId
        timestamp
        imageUrl
        videoUrl
        mediaSizeMegaBytes
        isVideo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      type
      awswerId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      attachmentUserId
      __typename
    }
  }
`;
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer($filter: ModelSubscriptionAnswerFilterInput) {
    onCreateAnswer(filter: $filter) {
      id
      userId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      questionId
      text
      attachments {
        items {
          id
          parentId
          userId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          timestamp
          elementId
          element {
            id
            parentId
            timestamp
            imageUrl
            videoUrl
            mediaSizeMegaBytes
            isVideo
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          type
          awswerId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          attachmentUserId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      attachmentIds
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      answerUserId
      __typename
    }
  }
`;
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer($filter: ModelSubscriptionAnswerFilterInput) {
    onUpdateAnswer(filter: $filter) {
      id
      userId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      questionId
      text
      attachments {
        items {
          id
          parentId
          userId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          timestamp
          elementId
          element {
            id
            parentId
            timestamp
            imageUrl
            videoUrl
            mediaSizeMegaBytes
            isVideo
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          type
          awswerId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          attachmentUserId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      attachmentIds
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      answerUserId
      __typename
    }
  }
`;
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer($filter: ModelSubscriptionAnswerFilterInput) {
    onDeleteAnswer(filter: $filter) {
      id
      userId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      questionId
      text
      attachments {
        items {
          id
          parentId
          userId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          timestamp
          elementId
          element {
            id
            parentId
            timestamp
            imageUrl
            videoUrl
            mediaSizeMegaBytes
            isVideo
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          type
          awswerId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          attachmentUserId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      attachmentIds
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      answerUserId
      __typename
    }
  }
`;
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onCreateQuestion(filter: $filter) {
      id
      userId
      title
      timestamp
      toUserId
      answer {
        id
        userId
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        questionId
        text
        attachments {
          items {
            id
            parentId
            userId
            timestamp
            elementId
            type
            awswerId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            attachmentUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        attachmentIds
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        answerUserId
        __typename
      }
      answerId
      attachments {
        id
        parentId
        userId
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        timestamp
        elementId
        element {
          id
          parentId
          timestamp
          imageUrl
          videoUrl
          mediaSizeMegaBytes
          isVideo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        type
        awswerId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        attachmentUserId
        __typename
      }
      attachmentIds
      chapterId
      toUser {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      storyId {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      questionToUserId
      questionStoryIdId
      __typename
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onUpdateQuestion(filter: $filter) {
      id
      userId
      title
      timestamp
      toUserId
      answer {
        id
        userId
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        questionId
        text
        attachments {
          items {
            id
            parentId
            userId
            timestamp
            elementId
            type
            awswerId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            attachmentUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        attachmentIds
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        answerUserId
        __typename
      }
      answerId
      attachments {
        id
        parentId
        userId
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        timestamp
        elementId
        element {
          id
          parentId
          timestamp
          imageUrl
          videoUrl
          mediaSizeMegaBytes
          isVideo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        type
        awswerId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        attachmentUserId
        __typename
      }
      attachmentIds
      chapterId
      toUser {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      storyId {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      questionToUserId
      questionStoryIdId
      __typename
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onDeleteQuestion(filter: $filter) {
      id
      userId
      title
      timestamp
      toUserId
      answer {
        id
        userId
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        questionId
        text
        attachments {
          items {
            id
            parentId
            userId
            timestamp
            elementId
            type
            awswerId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            attachmentUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        attachmentIds
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        answerUserId
        __typename
      }
      answerId
      attachments {
        id
        parentId
        userId
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        timestamp
        elementId
        element {
          id
          parentId
          timestamp
          imageUrl
          videoUrl
          mediaSizeMegaBytes
          isVideo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        type
        awswerId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        attachmentUserId
        __typename
      }
      attachmentIds
      chapterId
      toUser {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      storyId {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      questionToUserId
      questionStoryIdId
      __typename
    }
  }
`;
export const onCreateMoment = /* GraphQL */ `
  subscription OnCreateMoment($filter: ModelSubscriptionMomentFilterInput) {
    onCreateMoment(filter: $filter) {
      id
      title
      order
      mediaId
      description
      userId
      taggedUserIds
      taggedUsers {
        items {
          id
          momentId
          userId
          moment {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      timestamp
      storyId
      chapterId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      media {
        id
        parentId
        timestamp
        imageUrl
        videoUrl
        mediaSizeMegaBytes
        isVideo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      chapter {
        id
        title
        order
        imageUrl
        isDefault
        storyId
        userId
        momentIds
        questionIds
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        questions {
          items {
            id
            userId
            title
            timestamp
            toUserId
            answerId
            attachmentIds
            chapterId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            questionToUserId
            questionStoryIdId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        moments {
          items {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        story {
          id
          title
          inviteCode
          inviteCodeForOwner
          imageUrl
          userId
          userIds
          users {
            nextToken
            startedAt
            __typename
          }
          owners {
            nextToken
            startedAt
            __typename
          }
          chapters {
            nextToken
            startedAt
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          locked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storyUserId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chapterUserId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      reportedCount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      momentUserId
      momentMediaId
      momentStoryId
      __typename
    }
  }
`;
export const onUpdateMoment = /* GraphQL */ `
  subscription OnUpdateMoment($filter: ModelSubscriptionMomentFilterInput) {
    onUpdateMoment(filter: $filter) {
      id
      title
      order
      mediaId
      description
      userId
      taggedUserIds
      taggedUsers {
        items {
          id
          momentId
          userId
          moment {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      timestamp
      storyId
      chapterId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      media {
        id
        parentId
        timestamp
        imageUrl
        videoUrl
        mediaSizeMegaBytes
        isVideo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      chapter {
        id
        title
        order
        imageUrl
        isDefault
        storyId
        userId
        momentIds
        questionIds
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        questions {
          items {
            id
            userId
            title
            timestamp
            toUserId
            answerId
            attachmentIds
            chapterId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            questionToUserId
            questionStoryIdId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        moments {
          items {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        story {
          id
          title
          inviteCode
          inviteCodeForOwner
          imageUrl
          userId
          userIds
          users {
            nextToken
            startedAt
            __typename
          }
          owners {
            nextToken
            startedAt
            __typename
          }
          chapters {
            nextToken
            startedAt
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          locked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storyUserId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chapterUserId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      reportedCount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      momentUserId
      momentMediaId
      momentStoryId
      __typename
    }
  }
`;
export const onDeleteMoment = /* GraphQL */ `
  subscription OnDeleteMoment($filter: ModelSubscriptionMomentFilterInput) {
    onDeleteMoment(filter: $filter) {
      id
      title
      order
      mediaId
      description
      userId
      taggedUserIds
      taggedUsers {
        items {
          id
          momentId
          userId
          moment {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      timestamp
      storyId
      chapterId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      media {
        id
        parentId
        timestamp
        imageUrl
        videoUrl
        mediaSizeMegaBytes
        isVideo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      chapter {
        id
        title
        order
        imageUrl
        isDefault
        storyId
        userId
        momentIds
        questionIds
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        questions {
          items {
            id
            userId
            title
            timestamp
            toUserId
            answerId
            attachmentIds
            chapterId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            questionToUserId
            questionStoryIdId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        moments {
          items {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        story {
          id
          title
          inviteCode
          inviteCodeForOwner
          imageUrl
          userId
          userIds
          users {
            nextToken
            startedAt
            __typename
          }
          owners {
            nextToken
            startedAt
            __typename
          }
          chapters {
            nextToken
            startedAt
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          locked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storyUserId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chapterUserId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      reportedCount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      momentUserId
      momentMediaId
      momentStoryId
      __typename
    }
  }
`;
export const onCreateChapter = /* GraphQL */ `
  subscription OnCreateChapter($filter: ModelSubscriptionChapterFilterInput) {
    onCreateChapter(filter: $filter) {
      id
      title
      order
      imageUrl
      isDefault
      storyId
      userId
      momentIds
      questionIds
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      questions {
        items {
          id
          userId
          title
          timestamp
          toUserId
          answer {
            id
            userId
            questionId
            text
            attachmentIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            answerUserId
            __typename
          }
          answerId
          attachments {
            id
            parentId
            userId
            timestamp
            elementId
            type
            awswerId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            attachmentUserId
            __typename
          }
          attachmentIds
          chapterId
          toUser {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          storyId {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          questionToUserId
          questionStoryIdId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      moments {
        items {
          id
          title
          order
          mediaId
          description
          userId
          taggedUserIds
          taggedUsers {
            nextToken
            startedAt
            __typename
          }
          timestamp
          storyId
          chapterId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          media {
            id
            parentId
            timestamp
            imageUrl
            videoUrl
            mediaSizeMegaBytes
            isVideo
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          reportedCount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          momentUserId
          momentMediaId
          momentStoryId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      sharedUrl {
        items {
          id
          url
          isReady
          chapterId
          storyId
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          timestamp
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSharedUrlsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chapterUserId
      __typename
    }
  }
`;
export const onUpdateChapter = /* GraphQL */ `
  subscription OnUpdateChapter($filter: ModelSubscriptionChapterFilterInput) {
    onUpdateChapter(filter: $filter) {
      id
      title
      order
      imageUrl
      isDefault
      storyId
      userId
      momentIds
      questionIds
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      questions {
        items {
          id
          userId
          title
          timestamp
          toUserId
          answer {
            id
            userId
            questionId
            text
            attachmentIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            answerUserId
            __typename
          }
          answerId
          attachments {
            id
            parentId
            userId
            timestamp
            elementId
            type
            awswerId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            attachmentUserId
            __typename
          }
          attachmentIds
          chapterId
          toUser {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          storyId {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          questionToUserId
          questionStoryIdId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      moments {
        items {
          id
          title
          order
          mediaId
          description
          userId
          taggedUserIds
          taggedUsers {
            nextToken
            startedAt
            __typename
          }
          timestamp
          storyId
          chapterId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          media {
            id
            parentId
            timestamp
            imageUrl
            videoUrl
            mediaSizeMegaBytes
            isVideo
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          reportedCount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          momentUserId
          momentMediaId
          momentStoryId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      sharedUrl {
        items {
          id
          url
          isReady
          chapterId
          storyId
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          timestamp
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSharedUrlsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chapterUserId
      __typename
    }
  }
`;
export const onDeleteChapter = /* GraphQL */ `
  subscription OnDeleteChapter($filter: ModelSubscriptionChapterFilterInput) {
    onDeleteChapter(filter: $filter) {
      id
      title
      order
      imageUrl
      isDefault
      storyId
      userId
      momentIds
      questionIds
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      questions {
        items {
          id
          userId
          title
          timestamp
          toUserId
          answer {
            id
            userId
            questionId
            text
            attachmentIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            answerUserId
            __typename
          }
          answerId
          attachments {
            id
            parentId
            userId
            timestamp
            elementId
            type
            awswerId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            attachmentUserId
            __typename
          }
          attachmentIds
          chapterId
          toUser {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          storyId {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          questionToUserId
          questionStoryIdId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      moments {
        items {
          id
          title
          order
          mediaId
          description
          userId
          taggedUserIds
          taggedUsers {
            nextToken
            startedAt
            __typename
          }
          timestamp
          storyId
          chapterId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          media {
            id
            parentId
            timestamp
            imageUrl
            videoUrl
            mediaSizeMegaBytes
            isVideo
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          reportedCount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          momentUserId
          momentMediaId
          momentStoryId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      sharedUrl {
        items {
          id
          url
          isReady
          chapterId
          storyId
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          timestamp
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSharedUrlsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chapterUserId
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      lastName
      funFacts
      bio
      sharingMoments
      imageUrl
      stories {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      ownershipStories {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      sharedUrls {
        items {
          id
          url
          isReady
          chapterId
          storyId
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          timestamp
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSharedUrlsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      relations {
        items {
          id
          relation
          withUser
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userRelationsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      emergency {
        id
        firstName
        lastName
        contact
        email
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        emergencyUserId
        __typename
      }
      taggedMoments {
        items {
          id
          momentId
          userId
          moment {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      userDevices {
        channelType
        deviceToken
        __typename
      }
      isAccountProtected
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userEmergencyId
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      lastName
      funFacts
      bio
      sharingMoments
      imageUrl
      stories {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      ownershipStories {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      sharedUrls {
        items {
          id
          url
          isReady
          chapterId
          storyId
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          timestamp
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSharedUrlsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      relations {
        items {
          id
          relation
          withUser
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userRelationsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      emergency {
        id
        firstName
        lastName
        contact
        email
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        emergencyUserId
        __typename
      }
      taggedMoments {
        items {
          id
          momentId
          userId
          moment {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      userDevices {
        channelType
        deviceToken
        __typename
      }
      isAccountProtected
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userEmergencyId
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      lastName
      funFacts
      bio
      sharingMoments
      imageUrl
      stories {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      ownershipStories {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      sharedUrls {
        items {
          id
          url
          isReady
          chapterId
          storyId
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          timestamp
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSharedUrlsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      relations {
        items {
          id
          relation
          withUser
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userRelationsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      emergency {
        id
        firstName
        lastName
        contact
        email
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        emergencyUserId
        __typename
      }
      taggedMoments {
        items {
          id
          momentId
          userId
          moment {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      userDevices {
        channelType
        deviceToken
        __typename
      }
      isAccountProtected
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userEmergencyId
      __typename
    }
  }
`;
export const onCreateStoryUsersLink = /* GraphQL */ `
  subscription OnCreateStoryUsersLink(
    $filter: ModelSubscriptionStoryUsersLinkFilterInput
  ) {
    onCreateStoryUsersLink(filter: $filter) {
      id
      userId
      storyId
      role
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateStoryUsersLink = /* GraphQL */ `
  subscription OnUpdateStoryUsersLink(
    $filter: ModelSubscriptionStoryUsersLinkFilterInput
  ) {
    onUpdateStoryUsersLink(filter: $filter) {
      id
      userId
      storyId
      role
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteStoryUsersLink = /* GraphQL */ `
  subscription OnDeleteStoryUsersLink(
    $filter: ModelSubscriptionStoryUsersLinkFilterInput
  ) {
    onDeleteStoryUsersLink(filter: $filter) {
      id
      userId
      storyId
      role
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateStory = /* GraphQL */ `
  subscription OnCreateStory(
    $filter: ModelSubscriptionStoryFilterInput
    $owner: String
  ) {
    onCreateStory(filter: $filter, owner: $owner) {
      id
      title
      inviteCode
      inviteCodeForOwner
      imageUrl
      userId
      userIds
      users {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      owners {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      chapters {
        items {
          id
          title
          order
          imageUrl
          isDefault
          storyId
          userId
          momentIds
          questionIds
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          questions {
            nextToken
            startedAt
            __typename
          }
          moments {
            nextToken
            startedAt
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chapterUserId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      sharedUrl {
        items {
          id
          url
          isReady
          chapterId
          storyId
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          timestamp
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSharedUrlsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      locked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      storyUserId
      owner
      __typename
    }
  }
`;
export const onUpdateStory = /* GraphQL */ `
  subscription OnUpdateStory(
    $filter: ModelSubscriptionStoryFilterInput
    $owner: String
  ) {
    onUpdateStory(filter: $filter, owner: $owner) {
      id
      title
      inviteCode
      inviteCodeForOwner
      imageUrl
      userId
      userIds
      users {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      owners {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      chapters {
        items {
          id
          title
          order
          imageUrl
          isDefault
          storyId
          userId
          momentIds
          questionIds
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          questions {
            nextToken
            startedAt
            __typename
          }
          moments {
            nextToken
            startedAt
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chapterUserId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      sharedUrl {
        items {
          id
          url
          isReady
          chapterId
          storyId
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          timestamp
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSharedUrlsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      locked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      storyUserId
      owner
      __typename
    }
  }
`;
export const onDeleteStory = /* GraphQL */ `
  subscription OnDeleteStory(
    $filter: ModelSubscriptionStoryFilterInput
    $owner: String
  ) {
    onDeleteStory(filter: $filter, owner: $owner) {
      id
      title
      inviteCode
      inviteCodeForOwner
      imageUrl
      userId
      userIds
      users {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      owners {
        items {
          id
          userId
          storyId
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      chapters {
        items {
          id
          title
          order
          imageUrl
          isDefault
          storyId
          userId
          momentIds
          questionIds
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          questions {
            nextToken
            startedAt
            __typename
          }
          moments {
            nextToken
            startedAt
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chapterUserId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      sharedUrl {
        items {
          id
          url
          isReady
          chapterId
          storyId
          chapter {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          timestamp
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSharedUrlsId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      locked
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      storyUserId
      owner
      __typename
    }
  }
`;
export const onCreateSharedUrl = /* GraphQL */ `
  subscription OnCreateSharedUrl(
    $filter: ModelSubscriptionSharedUrlFilterInput
  ) {
    onCreateSharedUrl(filter: $filter) {
      id
      url
      isReady
      chapterId
      storyId
      chapter {
        id
        title
        order
        imageUrl
        isDefault
        storyId
        userId
        momentIds
        questionIds
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        questions {
          items {
            id
            userId
            title
            timestamp
            toUserId
            answerId
            attachmentIds
            chapterId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            questionToUserId
            questionStoryIdId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        moments {
          items {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        story {
          id
          title
          inviteCode
          inviteCodeForOwner
          imageUrl
          userId
          userIds
          users {
            nextToken
            startedAt
            __typename
          }
          owners {
            nextToken
            startedAt
            __typename
          }
          chapters {
            nextToken
            startedAt
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          locked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storyUserId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chapterUserId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      timestamp
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userSharedUrlsId
      __typename
    }
  }
`;
export const onUpdateSharedUrl = /* GraphQL */ `
  subscription OnUpdateSharedUrl(
    $filter: ModelSubscriptionSharedUrlFilterInput
  ) {
    onUpdateSharedUrl(filter: $filter) {
      id
      url
      isReady
      chapterId
      storyId
      chapter {
        id
        title
        order
        imageUrl
        isDefault
        storyId
        userId
        momentIds
        questionIds
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        questions {
          items {
            id
            userId
            title
            timestamp
            toUserId
            answerId
            attachmentIds
            chapterId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            questionToUserId
            questionStoryIdId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        moments {
          items {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        story {
          id
          title
          inviteCode
          inviteCodeForOwner
          imageUrl
          userId
          userIds
          users {
            nextToken
            startedAt
            __typename
          }
          owners {
            nextToken
            startedAt
            __typename
          }
          chapters {
            nextToken
            startedAt
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          locked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storyUserId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chapterUserId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      timestamp
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userSharedUrlsId
      __typename
    }
  }
`;
export const onDeleteSharedUrl = /* GraphQL */ `
  subscription OnDeleteSharedUrl(
    $filter: ModelSubscriptionSharedUrlFilterInput
  ) {
    onDeleteSharedUrl(filter: $filter) {
      id
      url
      isReady
      chapterId
      storyId
      chapter {
        id
        title
        order
        imageUrl
        isDefault
        storyId
        userId
        momentIds
        questionIds
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        questions {
          items {
            id
            userId
            title
            timestamp
            toUserId
            answerId
            attachmentIds
            chapterId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            questionToUserId
            questionStoryIdId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        moments {
          items {
            id
            title
            order
            mediaId
            description
            userId
            taggedUserIds
            timestamp
            storyId
            chapterId
            reportedCount
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            momentUserId
            momentMediaId
            momentStoryId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        story {
          id
          title
          inviteCode
          inviteCodeForOwner
          imageUrl
          userId
          userIds
          users {
            nextToken
            startedAt
            __typename
          }
          owners {
            nextToken
            startedAt
            __typename
          }
          chapters {
            nextToken
            startedAt
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          locked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storyUserId
          owner
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chapterUserId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      timestamp
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userSharedUrlsId
      __typename
    }
  }
`;
export const onCreateRelationship = /* GraphQL */ `
  subscription OnCreateRelationship(
    $filter: ModelSubscriptionRelationshipFilterInput
  ) {
    onCreateRelationship(filter: $filter) {
      id
      relation
      withUser
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userRelationsId
      __typename
    }
  }
`;
export const onUpdateRelationship = /* GraphQL */ `
  subscription OnUpdateRelationship(
    $filter: ModelSubscriptionRelationshipFilterInput
  ) {
    onUpdateRelationship(filter: $filter) {
      id
      relation
      withUser
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userRelationsId
      __typename
    }
  }
`;
export const onDeleteRelationship = /* GraphQL */ `
  subscription OnDeleteRelationship(
    $filter: ModelSubscriptionRelationshipFilterInput
  ) {
    onDeleteRelationship(filter: $filter) {
      id
      relation
      withUser
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userRelationsId
      __typename
    }
  }
`;
export const onCreateEmergency = /* GraphQL */ `
  subscription OnCreateEmergency(
    $filter: ModelSubscriptionEmergencyFilterInput
  ) {
    onCreateEmergency(filter: $filter) {
      id
      firstName
      lastName
      contact
      email
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      emergencyUserId
      __typename
    }
  }
`;
export const onUpdateEmergency = /* GraphQL */ `
  subscription OnUpdateEmergency(
    $filter: ModelSubscriptionEmergencyFilterInput
  ) {
    onUpdateEmergency(filter: $filter) {
      id
      firstName
      lastName
      contact
      email
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      emergencyUserId
      __typename
    }
  }
`;
export const onDeleteEmergency = /* GraphQL */ `
  subscription OnDeleteEmergency(
    $filter: ModelSubscriptionEmergencyFilterInput
  ) {
    onDeleteEmergency(filter: $filter) {
      id
      firstName
      lastName
      contact
      email
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      emergencyUserId
      __typename
    }
  }
`;
export const onCreateReport = /* GraphQL */ `
  subscription OnCreateReport($filter: ModelSubscriptionReportFilterInput) {
    onCreateReport(filter: $filter) {
      id
      name
      userID
      email
      reason
      reportedContent
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateReport = /* GraphQL */ `
  subscription OnUpdateReport($filter: ModelSubscriptionReportFilterInput) {
    onUpdateReport(filter: $filter) {
      id
      name
      userID
      email
      reason
      reportedContent
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteReport = /* GraphQL */ `
  subscription OnDeleteReport($filter: ModelSubscriptionReportFilterInput) {
    onDeleteReport(filter: $filter) {
      id
      name
      userID
      email
      reason
      reportedContent
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateStorageStatistics = /* GraphQL */ `
  subscription OnCreateStorageStatistics(
    $filter: ModelSubscriptionStorageStatisticsFilterInput
  ) {
    onCreateStorageStatistics(filter: $filter) {
      id
      timestamp
      fileSize
      s3Key
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      storageStatisticsUserId
      __typename
    }
  }
`;
export const onUpdateStorageStatistics = /* GraphQL */ `
  subscription OnUpdateStorageStatistics(
    $filter: ModelSubscriptionStorageStatisticsFilterInput
  ) {
    onUpdateStorageStatistics(filter: $filter) {
      id
      timestamp
      fileSize
      s3Key
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      storageStatisticsUserId
      __typename
    }
  }
`;
export const onDeleteStorageStatistics = /* GraphQL */ `
  subscription OnDeleteStorageStatistics(
    $filter: ModelSubscriptionStorageStatisticsFilterInput
  ) {
    onDeleteStorageStatistics(filter: $filter) {
      id
      timestamp
      fileSize
      s3Key
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      storageStatisticsUserId
      __typename
    }
  }
`;
export const onCreateMomentTaggedUsers = /* GraphQL */ `
  subscription OnCreateMomentTaggedUsers(
    $filter: ModelSubscriptionMomentTaggedUsersFilterInput
  ) {
    onCreateMomentTaggedUsers(filter: $filter) {
      id
      momentId
      userId
      moment {
        id
        title
        order
        mediaId
        description
        userId
        taggedUserIds
        taggedUsers {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        timestamp
        storyId
        chapterId
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        media {
          id
          parentId
          timestamp
          imageUrl
          videoUrl
          mediaSizeMegaBytes
          isVideo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        chapter {
          id
          title
          order
          imageUrl
          isDefault
          storyId
          userId
          momentIds
          questionIds
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          questions {
            nextToken
            startedAt
            __typename
          }
          moments {
            nextToken
            startedAt
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chapterUserId
          __typename
        }
        story {
          id
          title
          inviteCode
          inviteCodeForOwner
          imageUrl
          userId
          userIds
          users {
            nextToken
            startedAt
            __typename
          }
          owners {
            nextToken
            startedAt
            __typename
          }
          chapters {
            nextToken
            startedAt
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          locked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storyUserId
          owner
          __typename
        }
        reportedCount
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        momentUserId
        momentMediaId
        momentStoryId
        __typename
      }
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateMomentTaggedUsers = /* GraphQL */ `
  subscription OnUpdateMomentTaggedUsers(
    $filter: ModelSubscriptionMomentTaggedUsersFilterInput
  ) {
    onUpdateMomentTaggedUsers(filter: $filter) {
      id
      momentId
      userId
      moment {
        id
        title
        order
        mediaId
        description
        userId
        taggedUserIds
        taggedUsers {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        timestamp
        storyId
        chapterId
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        media {
          id
          parentId
          timestamp
          imageUrl
          videoUrl
          mediaSizeMegaBytes
          isVideo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        chapter {
          id
          title
          order
          imageUrl
          isDefault
          storyId
          userId
          momentIds
          questionIds
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          questions {
            nextToken
            startedAt
            __typename
          }
          moments {
            nextToken
            startedAt
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chapterUserId
          __typename
        }
        story {
          id
          title
          inviteCode
          inviteCodeForOwner
          imageUrl
          userId
          userIds
          users {
            nextToken
            startedAt
            __typename
          }
          owners {
            nextToken
            startedAt
            __typename
          }
          chapters {
            nextToken
            startedAt
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          locked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storyUserId
          owner
          __typename
        }
        reportedCount
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        momentUserId
        momentMediaId
        momentStoryId
        __typename
      }
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteMomentTaggedUsers = /* GraphQL */ `
  subscription OnDeleteMomentTaggedUsers(
    $filter: ModelSubscriptionMomentTaggedUsersFilterInput
  ) {
    onDeleteMomentTaggedUsers(filter: $filter) {
      id
      momentId
      userId
      moment {
        id
        title
        order
        mediaId
        description
        userId
        taggedUserIds
        taggedUsers {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        timestamp
        storyId
        chapterId
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        media {
          id
          parentId
          timestamp
          imageUrl
          videoUrl
          mediaSizeMegaBytes
          isVideo
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        chapter {
          id
          title
          order
          imageUrl
          isDefault
          storyId
          userId
          momentIds
          questionIds
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          questions {
            nextToken
            startedAt
            __typename
          }
          moments {
            nextToken
            startedAt
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          story {
            id
            title
            inviteCode
            inviteCodeForOwner
            imageUrl
            userId
            userIds
            locked
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            storyUserId
            owner
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chapterUserId
          __typename
        }
        story {
          id
          title
          inviteCode
          inviteCodeForOwner
          imageUrl
          userId
          userIds
          users {
            nextToken
            startedAt
            __typename
          }
          owners {
            nextToken
            startedAt
            __typename
          }
          chapters {
            nextToken
            startedAt
            __typename
          }
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          sharedUrl {
            nextToken
            startedAt
            __typename
          }
          locked
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storyUserId
          owner
          __typename
        }
        reportedCount
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        momentUserId
        momentMediaId
        momentStoryId
        __typename
      }
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateStoryUsers = /* GraphQL */ `
  subscription OnCreateStoryUsers(
    $filter: ModelSubscriptionStoryUsersFilterInput
    $owner: String
  ) {
    onCreateStoryUsers(filter: $filter, owner: $owner) {
      id
      userId
      storyId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStoryUsers = /* GraphQL */ `
  subscription OnUpdateStoryUsers(
    $filter: ModelSubscriptionStoryUsersFilterInput
    $owner: String
  ) {
    onUpdateStoryUsers(filter: $filter, owner: $owner) {
      id
      userId
      storyId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStoryUsers = /* GraphQL */ `
  subscription OnDeleteStoryUsers(
    $filter: ModelSubscriptionStoryUsersFilterInput
    $owner: String
  ) {
    onDeleteStoryUsers(filter: $filter, owner: $owner) {
      id
      userId
      storyId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onCreateStoryOwners = /* GraphQL */ `
  subscription OnCreateStoryOwners(
    $filter: ModelSubscriptionStoryOwnersFilterInput
    $owner: String
  ) {
    onCreateStoryOwners(filter: $filter, owner: $owner) {
      id
      userId
      storyId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStoryOwners = /* GraphQL */ `
  subscription OnUpdateStoryOwners(
    $filter: ModelSubscriptionStoryOwnersFilterInput
    $owner: String
  ) {
    onUpdateStoryOwners(filter: $filter, owner: $owner) {
      id
      userId
      storyId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStoryOwners = /* GraphQL */ `
  subscription OnDeleteStoryOwners(
    $filter: ModelSubscriptionStoryOwnersFilterInput
    $owner: String
  ) {
    onDeleteStoryOwners(filter: $filter, owner: $owner) {
      id
      userId
      storyId
      user {
        id
        name
        lastName
        funFacts
        bio
        sharingMoments
        imageUrl
        stories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        ownershipStories {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        sharedUrls {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        relations {
          items {
            id
            relation
            withUser
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userRelationsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        emergency {
          id
          firstName
          lastName
          contact
          email
          user {
            id
            name
            lastName
            funFacts
            bio
            sharingMoments
            imageUrl
            isAccountProtected
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userEmergencyId
            __typename
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          emergencyUserId
          __typename
        }
        taggedMoments {
          items {
            id
            momentId
            userId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        userDevices {
          channelType
          deviceToken
          __typename
        }
        isAccountProtected
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userEmergencyId
        __typename
      }
      story {
        id
        title
        inviteCode
        inviteCodeForOwner
        imageUrl
        userId
        userIds
        users {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        owners {
          items {
            id
            userId
            storyId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        chapters {
          items {
            id
            title
            order
            imageUrl
            isDefault
            storyId
            userId
            momentIds
            questionIds
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            chapterUserId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        user {
          id
          name
          lastName
          funFacts
          bio
          sharingMoments
          imageUrl
          stories {
            nextToken
            startedAt
            __typename
          }
          ownershipStories {
            nextToken
            startedAt
            __typename
          }
          sharedUrls {
            nextToken
            startedAt
            __typename
          }
          relations {
            nextToken
            startedAt
            __typename
          }
          emergency {
            id
            firstName
            lastName
            contact
            email
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            emergencyUserId
            __typename
          }
          taggedMoments {
            nextToken
            startedAt
            __typename
          }
          userDevices {
            channelType
            deviceToken
            __typename
          }
          isAccountProtected
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userEmergencyId
          __typename
        }
        sharedUrl {
          items {
            id
            url
            isReady
            chapterId
            storyId
            timestamp
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userSharedUrlsId
            __typename
          }
          nextToken
          startedAt
          __typename
        }
        locked
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storyUserId
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
