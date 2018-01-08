<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PlayerRepository")
 */
class Player
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /** @ORM\Column(type="string", length=70) */
    private $firstName;

    /** @ORM\Column(type="string", length=70) */
    private $lastName;

    /** @ORM\ManyToOne(targetEntity="Team") */
    private $draftedByTeam;

    /** @ORM\Column(type="integer") */
    private $draftRound;

    /** @ORM\Column(type="integer") */
    private $draftSeason;

    /** @ORM\Column(type="integer") */
    private $draftPickNumber;

    /** @ORM\Column(type="date") */
    private $birthDate;

    /** @ORM\Column(type="string", length=10) */
    private $draftType;

    /** @ORM\OneToMany(targetEntity="PlayerGameStats", mappedBy="player",fetch="EAGER") */
    private $gameStats;

    public function getId()
    {
        return $this->id;
    }

    public function getGameStats() 
    {
        return $this->gameStats;
    }

    public function setGameStats($stats) 
    {
        $this->gameStats = $stats;
    }


    public function getFirstName() 
    {
    	return $this->firstName;
    }

    public function getLastName() 
    {
    	return $this->lastName;
    }

    public function getDraftedByTeam() 
    {
    	return $this->draftedByTeam;
    }

    public function getDraftRound() 
    {
    	return $this->draftRound;
    }

    public function getDraftSeason() 
    {
    	return $this->draftSeason;
    }

    public function getDraftPickNumber() 
    {
    	return $this->draftPickNumber;
    }

    public function getBirthDate() 
    {
    	return $this->birthDate;
    }

    public function getDraftType() 
    {
    	return $this->draftType;
    }

    public function setFirstName($firstName) 
    {
    	return $this->firstName = $firstName;
    }

    public function setLastName($lastName) 
    {
    	return $this->lastName = $lastName;
    }

    public function setDraftedByTeam( Team $draftedByTeam) 
    {
    	return $this->draftedByTeam = $draftedByTeam;
    }

    public function setDraftRound($draftRound) 
    {
    	return $this->draftRound = $draftRound;
    }

    public function setDraftSeason($draftSeason) 
    {
    	return $this->draftSeason = $draftSeason;
    }

    public function setDraftPickNumber($draftPickNumber) 
    {
    	return $this->draftPickNumber = $draftPickNumber;
    }

    public function setBirthDate($birthDate) 
    {
    	return $this->birthDate = $birthDate;
    }

    public function setDraftType($draftType) 
    {
    	return $this->draftType = $draftType;
    }

}
